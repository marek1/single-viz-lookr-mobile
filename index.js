looker.plugins.visualizations.add({
    options: {
        valueIndex: {
            type: "number",
            label: "Value: Overwrite",
            section: "Value",
            display: "select",
            values: [
                {"0": 0},
                {"1": 1},
                {"2": 2},
                {"3": 3},
                {"4": 4},
                {"5": 5},
            ],
            default: 0
        },
        htmlTemplate: {
            type: "string",
            label: "Value: Overwrite",
            section: "Value",
            default: `{{ value }}`
        },
        fontSize: {
            type: "string",
            label: "Text: Size",
            section: "Style",
            default: "100"
        },
        formatValue: {
            type: "string",
            label: "Value: Format",
            section: "Value",
            display: "select",
            values: [
                {"de-DE": "de-DE"},
                {"en-EN": "en-EN"},
                {"en-US": "en-US"},
            ],
            default: "de-DE"
        },
        formatDigits: {
            type: "number",
            label: "Value: Format Digits",
            section: "Value",
            display: "select",
            values: [
                {"0": 0},
                {"1": 1},
                {"2": 2},
                {"3": 3},
                {"4": 4},
                {"5": 5},
            ],
            default: 0
        },
        addedUnit: {
            type: "string",
            label: "Value: Add unit",
            section: "Value",
            default: ``
        },
        freshnessIcon: {
            type: "number",
            label: "Set column index",
            section: "Icon",
            display: "select",
            values: [
                {"None": -1},
                {"0": 0},
                {"1": 1},
                {"2": 2},
                {"3": 3},
                {"4": 4},
                {"5": 5},
            ],
            default: -1
        },

        labelText: {
            type: "string",
            label: "Label: Overwrite",
            section: "Label",
            default: `{{ value }}`
        },
        labelFontSize: {
            type: "string",
            label: "Label: Set font size",
            section: "Label",
            default: ``
        },
        conditionTxt: {
            type: "string",
            label: "Alert: Indicate when below",
            section: "Style",
            placeholder: "0"
        },
        backgroundColor: {
            type: "string",
            label: "Background: Color",
            section: "Style",
            display: "select",
            values: [
                {"Orange": "#FF6600"},
                {"Grey1": "#636363"},
                {"Grey2": "#7E7E7E"},
                {"Grey3": "#999999"},
                {"Grey4": "#B2B2B2"},
                {"Grey5": "#CCCCCC"},
                {"Petrol": "#0996B3"},
                {"Asphalt": "#333333"},
                {"White": "#F7F7F7"},
                {"Green": "#86B817"},
                {"Red": "#E53238"}
            ],
            default: "White"
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
                {"Orange": "#FF6600"},
                {"Green": "#86B817"},
                {"Red": "#E53238"}
            ],
            default: "Black"
        },
        yoyLabel: {
            type: "string",
            label: "Value 1: Overwrite label",
            section: "Deltas",
            default: ``
        },
        yoyIndex: {
            type: "string",
            label: "Value 1: Set column index",
            section: "Deltas",
            default: "0"
        },
        yoyDecimal: {
            type: "number",
            label: "Value 1: Set decimals",
            section: "Deltas",
            display: "select",
            values: [
                {"0": 0},
                {"1": 1},
                {"2": 2},
                {"3": 3},
                {"4": 4},
                {"5": 5},
            ],
            default: 0
        },
        momLabel: {
            type: "string",
            label: "Value 2: Overwrite label",
            section: "Deltas",
            default: ``
        },
        momIndex: {
            type: "string",
            label: "Value 2: Set column index",
            section: "Deltas",
            default: "0"
        },
        momDecimal: {
            type: "number",
            label: "Value 2: Set decimals",
            section: "Deltas",
            display: "select",
            values: [
                {"0": 0},
                {"1": 1},
                {"2": 2},
                {"3": 3},
                {"4": 4},
                {"5": 5},
            ],
            default: 0
        },
        fromTargetLabel: {
            type: "string",
            label: "Value 3: Overwrite label",
            section: "Deltas",
            default: ``
        },
        fromTargetIndex: {
            type: "string",
            label: "Value 3: Set column index",
            section: "Deltas",
            default: "0"
        },
        fromTargetDecimal: {
            type: "number",
            label: "Value 3: Set decimals",
            section: "Deltas",
            display: "select",
            values: [
                {"0": 0},
                {"1": 1},
                {"2": 2},
                {"3": 3},
                {"4": 4},
                {"5": 5},
            ],
            default: 0
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

        let valueCell = firstRow[qFields.dimension_like.length > 0 ? qFields.dimension_like[config.valueIndex].name : qFields.measure_like[config.valueIndex].name];
        let htmlForCell = LookerCharts.Utils.filterableValueForCell(valueCell);
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
        element.style.backgroundColor = config.backgroundColor;
        element.style.color = config.textColor;

        if (isNumber && parseInt(config.conditionTxt) > htmlForCell) {
            element.style.color = "#F7F7F7";
            element.style.backgroundColor = "#FF0000";
        }

        element.style.fontSize = config.fontSize+"px";
        element.style.textAlign = "center";

        // TODO: Adding freshness

        if (config.freshnessIcon >= 0) {
            let freshness = LookerCharts.Utils.filterableValueForCell(firstRow[qFields.measure_like[config.fromTargetIndex].name ? qFields.measure_like[config.fromTargetIndex].name : "-"]);
            if (freshness === "Yes") {
                element.innerHTML += "<div style='font-size: 20px; float: right; color: green; margin: 5px;'> ♺ </div>";
            } else {
                element.innerHTML += "<div style='font-size: 20px; float: right; color: red; margin: 5px;'> ♺ </div>";
            }
        }


        // Adding label

        if (config.labelText) {
            element.innerHTML += "<div style='font-size: " + config.labelFontSize + "px;'>" + config.labelText + "</div>";
        } else {
            let labelText =  qFields.dimension_like.length > 0 ? qFields.dimension_like[0].label_short : qFields.measure_like[0].label_short;
            element.innerHTML += "<div style='font-size: " + config.labelFontSize + "px;'>" + labelText + "</div>";
        }

        // Adding horizontal line

        element.innerHTML += "<hr style='margin: 20px 0 20px;'></hr>";

        // Adding Delta
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
        if (config.yoyLabel) {
            element.innerHTML += "<div style='float: left; width:33%; font-size: 1rem !important'>" + config.yoyLabel + "</div>";
        } else {
            element.innerHTML += "<div style='float: left; width:33%; font-size: 1rem !important'>YoY</div>";
        }
        if (config.momLabel) {
            element.innerHTML += "<div style='float: left; width:33%; font-size: 1rem !important'>" + config.momLabel + "</div>";
        } else {
            element.innerHTML += "<div style='float: left; width:33%; font-size: 1rem !important'>MoM</div>";
        }
        if (config.fromTargetLabel) {
            element.innerHTML += "<div style='float: left; width:33%; font-size: 1rem !important'>" + config.fromTargetLabel + "</div>";
        } else {
            element.innerHTML += "<div style='float: left; width:33%; font-size: 1rem !important'>from Target</div>";
        }
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
