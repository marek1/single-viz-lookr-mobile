looker.plugins.visualizations.add({
    options: {
        htmlTemplate: {
            type: "string",
            label: "Value: Overwrite",
            section: "Overwrite",
            default: `{{ value }}`
        },
        formatValue: {
            type: "string",
            label: "Value: Format",
            section: "Overwrite",
            display: "select",
            values: [
                {"de-DE": "de-DE"},
                {"en-EN": "en-EN"},
                {"en-US": "en-US"},
            ],
            default: "de-DE"
        },
        formatDigits: {
            type: "string",
            label: "Value: Format Digits",
            section: "Format",
            display: "select",
            values: [
                {"0": "0"},
                {"1": "1"},
                {"2": "2"},
                {"3": "3"},
                {"4": "4"},
                {"5": "5"},
            ],
            default: "0"
        },
        addedUnit: {
            type: "string",
            label: "Value: Add unit",
            section: "Format",
            default: ``
        },
        labelText: {
            type: "string",
            label: "Label: Overwrite",
            section: "Label",
            default: `{{ value }}`
        },
        conditionTxt: {
            type: "string",
            label: "Alert: Indicate when below",
            section: "Style",
            placeholder: "0"
        },
        textColor: {
            type: "string",
            label: "Text: Color",
            section: "Style",
            display: "select",
            values: [
                {"Black": "#333333"},
                {"White": "#F7F7F7"},
                {"Blue": "#0996B3"},
                {"Grey": "#E4E4E4"},
                {"Orange": "#FF6600"}
            ],
            default: "Black"
        },
        fontSize: {
            type: "string",
            label: "Text: Size",
            section: "Style",
            display: "select",
            values: [
                {"Big": "20rem"},
                {"Med": "10rem"},
                {"Small": "5rem"}
            ],
            default: "Med"
        },
        yoyIndex: {
            type: "string",
            label: "1. YoY : Indicate column index",
            section: "Subs",
            default: "0"
        },
        yoyDecimal: {
            type: "string",
            label: "1. YoY : Select decimal ",
            section: "Subs",
            display: "select",
            values: [
                {"0": "0"},
                {"1": "1"},
                {"2": "2"},
                {"3": "3"},
                {"4": "4"},
                {"5": "5"},
            ],
            default: "0"
        },
        momIndex: {
            type: "string",
            label: "2. MoM : Indicate column index",
            section: "Subs",
            default: "0"
        },
        momDecimal: {
            type: "string",
            label: "2. MoM : Select decimal ",
            section: "Subs",
            display: "select",
            values: [
                {"0": "0"},
                {"1": "1"},
                {"2": "2"},
                {"3": "3"},
                {"4": "4"},
                {"5": "5"},
            ],
            default: "0"
        },
        fromTargetIndex: {
            type: "string",
            label: "3. From Target : Indicate column index",
            section: "Subs",
            default: "0"
        },
        fromTargetDecimal: {
            type: "string",
            label: "3. From Target : Select decimal ",
            section: "Subs",
            display: "select",
            values: [
                {"0": "0"},
                {"1": "1"},
                {"2": "2"},
                {"3": "3"},
                {"4": "4"},
                {"5": "5"},
            ],
            default: "0"
        },
    },

    create: function(element, config) {},

    updateAsync: function(data, element, config, queryResponse, details, doneRendering) {
        this.clearErrors();

        const firstRow = data[0];
        const qFields = queryResponse.fields;

        if (qFields.dimension_like.length === 0 &&
            qFields.measure_like.length === 0) {
            this.addError({
                title: `No visible fields`,
                message: `At least one dimension, measure or table calculation needs to be visible.`
            })
        }

        let firstCell = firstRow[qFields.dimension_like.length > 0 ? qFields.dimension_like[0].name : qFields.measure_like[0].name];
        let htmlForCell = LookerCharts.Utils.filterableValueForCell(firstCell);
        const htmlTemplate = config && config.htmlTemplate || this.options.htmlTemplate.default;

        let isNumber = false;
        if (!isNaN(htmlForCell)) {
            isNumber = true;
            htmlForCell = parseInt(htmlForCell);

            htmlForCell = htmlForCell.toLocaleString(
                config.formatValue, // leave undefined to use the visitor's browser
                // locale or a string like 'en-US' to override it.
                { minimumFractionDigits: parseInt(config.formatDigits) }
            );
        }

        const htmlFormatted = htmlTemplate.replace(/{{.*}}/g, htmlForCell + " " + config.addedUnit);

        element.innerHTML = htmlFormatted;

        if (isNumber && parseInt(config.conditionTxt) > htmlForCell) {
            element.style.color = "#F7F7F7";
            element.style.backgroundColor = "#FF0000";
        } else {
            element.style.color = "#333333";
            element.style.backgroundColor = "#F7F7F7";
        }

        element.style.color = config.textColor;
        element.style.fontSize = config.fontSize;
        element.style.textAlign = "center";

        // Adding label

        if (config.labelText) {
            element.innerHTML += "<div style='font-size: 2rem;'>" + config.labelText + "</div>";
        } else {
            let labelText =  qFields.dimension_like.length > 0 ? qFields.dimension_like[0].label_short : qFields.measure_like[0].label_short;
            element.innerHTML += "<div style='font-size: 2rem;'>" + labelText + "</div>";
        }

        // Adding horizontal line

        element.innerHTML += "<hr style='margin: 20px 0 20px;'></hr>";

        // Adding
        // YOY:
        let yoyValue = LookerCharts.Utils.filterableValueForCell(firstRow[qFields.measure_like[config.yoyIndex].name ? qFields.measure_like[config.yoyIndex].name : "-"]);
        if (isNaN(yoyValue)) {
            yoyValue = 0;
        } else {
            yoyValue = parseFloat(yoyValue * 100).toFixed(parseInt(config.yoyDecimal))
        }
        // MOM
        let momValue = LookerCharts.Utils.filterableValueForCell(firstRow[qFields.measure_like[config.momIndex].name ? qFields.measure_like[config.momIndex].name : "-"]);
        if (isNaN(momValue)) {
            momValue = 0;
        } else {
            momValue = parseFloat(momValue * 100).toFixed(parseInt(config.momDecimal))
        }
        // from Target
        let targetValue = LookerCharts.Utils.filterableValueForCell(firstRow[qFields.measure_like[config.fromTargetIndex].name ? qFields.measure_like[config.fromTargetIndex].name : "-"]);
        if (isNaN(targetValue)) {
            targetValue = 0;
        } else {
            targetValue = parseFloat(targetValue * 100).toFixed(parseInt(config.fromTargetDecimal))
        }


        element.innerHTML += "<div style='width:100%; '>";
        element.innerHTML += "<div style='float: left; width:33%; font-size: 1rem !important'>YoY</div>";
        element.innerHTML += "<div style='float: left; width:33%; font-size: 1rem !important'>MoM</div>";
        element.innerHTML += "<div style='float: left; width:33%; font-size: 1rem !important'>from Target</div>";
        element.innerHTML += "</div>"
        element.innerHTML += "<div style='width:100%; '>";
        if (yoyValue > 0) {
            element.innerHTML += "<div style='float: left; width:33%; font-size: 3rem !important'><span style='color:green; float: left; font-size: 2rem !important'> ▲ </span>" + yoyValue + "%</div>";
        } else if (yoyValue < 0) {
            element.innerHTML += "<div style='float: left; width:33%; font-size: 3rem !important'><span style='color:red; float: left; font-size: 2rem !important'> ▼ </span>" + yoyValue + "%</div>";
        } else {
            element.innerHTML += "<div style='float: left; width:33%; font-size: 3rem !important'>-</div>";
        }
        if (momValue > 0) {
            element.innerHTML += "<div style='float: left; width:33%; font-size: 3rem !important'><span style='color:green; float: left; font-size: 2rem !important'> ▲ </span>" + momValue + "%</div>";
        } else if (momValue < 0) {
            element.innerHTML += "<div style='float: left; width:33%; font-size: 3rem !important'><span style='color:red; float: left; font-size: 2rem !important'> ▼ </span>" + momValue + "%</div>";
        } else {
            element.innerHTML += "<div style='float: left; width:33%; font-size: 3rem !important'>-</div>";
        }
        if (targetValue > 0) {
            element.innerHTML += "<div style='float: left; width:33%; font-size: 3rem !important'><span style='color:green; float: left; font-size: 2rem !important'> ▲ </span>" + targetValue + "%</div>";
        } else if (targetValue < 0) {
            element.innerHTML += "<div style='float: left; width:33%; font-size: 3rem !important'><span style='color:red; float: left; font-size: 2rem !important'> ▼ </span>" + targetValue + "%</div>";
        } else {
            element.innerHTML += "<div style='float: left; width:33%; font-size: 3rem !important'>-</div>";
        }


        element.innerHTML += "<div style='float: left; width:33%; font-size: 3rem !important'></div>";
        element.innerHTML += "</div>"

        doneRendering();
    }
});
