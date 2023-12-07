looker.plugins.visualizations.add({
    options: {
        valueDim: {
            type: "string",
            label: "Value: Pick dimension",
            section: "Value",
            display: "select",
            values: [
                {"none": "none"},
                {"dimensions": "dimensions"},
                {"measures": "measures"},
                {"table_calculations": "table_calculations"},
            ],
            default: "dimensions"
        },
        valueIndex: {
            type: "string",
            label: "Value: Pick index",
            section: "Value",
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
        htmlTemplate: {
            type: "string",
            label: "Value: Overwrite",
            section: "Value",
            default: `<div>{{ value }}</div>`
        },
        fontSize: {
            type: "string",
            label: "Text: Size (+ px, vw, %)",
            section: "Value",
            default: "8vw"
        },
        formatValue: {
            type: "string",
            label: "Value: Format as Country",
            section: "Value",
            display: "select",
            values: [
                {"none": "none"},
                {"de-DE": "de-DE"},
                {"en-EN": "en-EN"},
                {"en-US": "en-US"},
            ],
            default: "none"
        },
        customValue: {
            type: "string",
            label: "Value: Format as k/m",
            section: "Value",
            display: "select",
            values: [
                {"none": "none"},
                {"thousands": "thousands"},
                {"millions": "millions"}
            ],
            default: "none"
        },
        formatDigits: {
            type: "string",
            label: "Value: Format Digits",
            section: "Value",
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
        freshnessText: {
            type: "string",
            label: "Data Freshness",
        },
        freshnessIconDim: {
            type: "string",
            label: "Icon: Pick dimension",
            section: "Icon",
            display: "select",
            values: [
                {"none": "none"},
                {"dimensions": "dimensions"},
                {"measures": "measures"},
                {"table_calculations": "table_calculations"},
            ],
            default: "none"
        },
        freshnessIconIndex: {
            type: "string",
            label: "Icon: Pick index",
            section: "Icon",
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

        labelText: {
            type: "string",
            label: "Label: Overwrite",
            section: "Label",
            default: `{{ value }}`
        },
        labelFontSize: {
            type: "string",
            label: "Label: Set font size (+ px, vw, %)",
            section: "Label",
            default: `5vw`
        },
        conditionTxt: {
            type: "string",
            label: "Alert: Indicate when below",
            section: "Value",
            default: ""
        },
        backgroundColor: {
            type: "string",
            label: "Background: Color",
            section: "Value",
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
                {"White": "#FFFFFF"},
                {"Green": "#86B817"},
                {"Red": "#E53238"}
            ],
            default: "White"
        },
        textColor: {
            type: "string",
            label: "Text: Color",
            section: "Value",
            display: "select",
            values: [
                {"Black": "#333333"},
                {"White": "#FFFFFF"},
                {"Blue": "#0996B3"},
                {"Grey": "#E4E4E4"},
                {"Orange": "#FF6600"},
                {"Green": "#86B817"},
                {"Red": "#E53238"}
            ],
            default: "Black"
        },
        values2FontSize: {
            type: "string",
            label: "Set font size (+ px, vw, %)",
            section: "Deltas",
            default: `3vw`
        },
        yoyLabel: {
            type: "string",
            label: "Value 1: Overwrite label",
            section: "Deltas",
            default: ``
        },
        yoyDim: {
            type: "string",
            label: "Value 1: Pick dimension",
            section: "Deltas",
            display: "select",
            values: [
                {"none": "none"},
                {"dimensions": "dimensions"},
                {"measures": "measures"},
                {"table_calculations": "table_calculations"},
            ],
            default: "dimensions"
        },
        yoyIndex: {
            type: "string",
            label: "Value 1: Pick index",
            section: "Deltas",
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
        yoyDecimal: {
            type: "string",
            label: "Value 1: Set decimals",
            section: "Deltas",
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
        momLabel: {
            type: "string",
            label: "Value 2: Overwrite label",
            section: "Deltas",
            default: ``
        },
        momDim: {
            type: "string",
            label: "Value 2: Pick dimension",
            section: "Deltas",
            display: "select",
            values: [
                {"none": "none"},
                {"dimensions": "dimensions"},
                {"measures": "measures"},
                {"table_calculations": "table_calculations"},
            ],
            default: "dimensions"
        },
        momIndex: {
            type: "string",
            label: "Value 2: Pick index",
            section: "Deltas",
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
        momDecimal: {
            type: "string",
            label: "Value 2: Set decimals",
            section: "Deltas",
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
        fromTargetLabel: {
            type: "string",
            label: "Value 3: Overwrite label",
            section: "Deltas",
            default: ``
        },
        fromTargetDim: {
            type: "string",
            label: "Value 3: Pick dimension",
            section: "Deltas",
            display: "select",
            values: [
                {"none": "none"},
                {"dimensions": "dimensions"},
                {"measures": "measures"},
                {"table_calculations": "table_calculations"},
            ],
            default: "dimensions"
        },
        fromTargetIndex: {
            type: "string",
            label: "Value 3: Pick index",
            section: "Deltas",
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
        fromTargetDecimal: {
            type: "string",
            label: "Value 3: Set decimals",
            section: "Deltas",
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

        console.log('qFields: ' , qFields);

        if (qFields.dimension_like.length === 0 &&
            qFields.measure_like.length === 0) {
            this.addError({
                title: `No visible fields`,
                message: `At least one dimension, measure or table calculation needs to be visible.`
            })
        }


        let htmlForCell = null;
        try {
            htmlForCell = LookerCharts.Utils.filterableValueForCell(firstRow[qFields[config.valueDim][config.valueIndex].name]);
        } catch (e) {}
        const htmlTemplate = config && config.htmlTemplate || this.options.htmlTemplate.default;

        let isNumber = false;
        let htmlFormatted = "-";
        if (htmlForCell && !isNaN(htmlForCell)) {
            isNumber = true;

            htmlForCell = parseInt(htmlForCell);

            let addedUnit = "";
            if (config.customValue === "thousands") {
                htmlForCell = htmlForCell / 1000;
                addedUnit = "K";
            } else if (config.customValue === "millions") {
                htmlForCell = htmlForCell / 1000000;
                addedUnit = "M";
            }

            if (config.formatDigits) {
                htmlForCell = parseFloat(htmlForCell).toFixed(config.formatDigits);
            }

            if (config.formatValue !== "none") {
                console.log('config.formatValue : ', config.formatValue);
                console.log('htmlForCell : ', htmlForCell);
                htmlForCell = toString(htmlForCell).toLocaleString(
                    config.formatValue,
                    { minimumFractionDigits: config.formatDigits }
                );
                console.log('htmlForCell : ', htmlForCell);
            }

            htmlFormatted = htmlTemplate.replace(/{{.*}}/g, htmlForCell + " " + addedUnit);
        }

        element.innerHTML = htmlFormatted;
        element.style.backgroundColor = config.backgroundColor;
        element.style.color = config.textColor;

        if (isNumber && config.conditionTxt && parseInt(config.conditionTxt) > htmlForCell) {
            element.style.color = "#F7F7F7";
            element.style.backgroundColor = "#FF0000";
        }

        element.style.fontSize = config.fontSize;
        element.style.textAlign = "center";

        // Adding freshness

        if (config.freshnessIconDim !== "none") {
            let freshness = null;
            try {
                freshness = LookerCharts.Utils.filterableValueForCell(firstRow[qFields[config.freshnessIconDim][config.freshnessIconIndex].name]);
            } catch (error) {

            }
            if (freshness === "Yes") {
                element.innerHTML += "<div style='font-size: 50%; position: absolute; color: green; right: 15px; top: 10px;'> ⛁ </div>";
            } else if (freshness === "No") {
                element.innerHTML += "<div style='font-size: 50%; position: absolute; color: red; right: 15px; top: 10px;'> ⛁ </div>";
            }
        }


        // Adding label

        if (config.labelText) {
            element.innerHTML += "<div style='font-size: " + config.labelFontSize + ";'>" + config.labelText + "</div>";
        } else {
            let labelText =  qFields.dimension_like.length > 0 ? qFields.dimension_like[0].label_short : qFields.measure_like[0].label_short;
            element.innerHTML += "<div style='font-size: " + config.labelFontSize + ";'>" + labelText + "</div>";
        }

        // Adding horizontal line

        element.innerHTML += "<hr style='margin: 20px 0 20px;'></hr>";

        // Adding Delta
        // YOY:
        let yoyValue = 0;
        try {
            yoyValue = LookerCharts.Utils.filterableValueForCell(firstRow[qFields[config.yoyDim][config.yoyIndex].name]);
        } catch (e) {}
        if (!isNaN(yoyValue)) {
            yoyValue = parseFloat(yoyValue * 100).toFixed(parseInt(config.yoyDecimal))
        }
        // MOM
        let momValue = 0;
        try {
            momValue = LookerCharts.Utils.filterableValueForCell(firstRow[qFields[config.momDim][config.momIndex].name]);
        } catch (e) {}
        if (!isNaN(momValue)) {
            momValue = parseFloat(momValue * 100).toFixed(parseInt(config.momDecimal))
        }
        // from Target
        let targetValue = 0;
        try {
            targetValue = LookerCharts.Utils.filterableValueForCell(firstRow[qFields[config.fromTargetDim][config.fromTargetIndex].name]);
        } catch (e) {}
        if (!isNaN(targetValue)) {
            targetValue = parseFloat(targetValue * 100).toFixed(parseInt(config.fromTargetDecimal))
        }


        element.innerHTML += "<div style='width:100%; '>";

        if (config.fromTargetDim != 'none') {
            if (config.yoyLabel) {
                element.innerHTML += "<div style='float: left; width:33%; font-size: " + config.values2FontSize + " !important'>" + config.yoyLabel + "</div>";
            } else {
                element.innerHTML += "<div style='float: left; width:33%; font-size: " + config.values2FontSize + " !important'>YoY</div>";
            }
            if (config.momLabel) {
                element.innerHTML += "<div style='float: left; width:33%; font-size: " + config.values2FontSize + " !important'>" + config.momLabel + "</div>";
            } else {
                element.innerHTML += "<div style='float: left; width:33%; font-size: " + config.values2FontSize + " !important'>MoM</div>";
            }
            if (config.fromTargetLabel) {
                element.innerHTML += "<div style='float: left; width:33%; font-size: " + config.values2FontSize + " !important'>" + config.fromTargetLabel + "</div>";
            } else {
                element.innerHTML += "<div style='float: left; width:33%; font-size: " + config.values2FontSize + " !important'>from Target</div>";
            }
        } else {
            if (config.yoyLabel) {
                element.innerHTML += "<div style='float: left; width:50%; font-size: " + config.values2FontSize + " !important'>" + config.yoyLabel + "</div>";
            } else {
                element.innerHTML += "<div style='float: left; width:50%; font-size: " + config.values2FontSize + " !important'>YoY</div>";
            }
            if (config.momLabel) {
                element.innerHTML += "<div style='float: left; width:50%; font-size: " + config.values2FontSize + " !important'>" + config.momLabel + "</div>";
            } else {
                element.innerHTML += "<div style='float: left; width:50%; font-size: " + config.values2FontSize + " !important'>MoM</div>";
            }
        }
        element.innerHTML += "</div>"
        element.innerHTML += "<div style='width:100%; '>";

        if (config.fromTargetDim != 'none') {
                      if (yoyValue > 0) {
                element.innerHTML += "<div style='float: left; width:33%; font-size: " + config.values2FontSize + " !important'><span style='color:green; font-size: 75% !important'> ▲ </span>" + yoyValue + "%</div>";
            } else if (yoyValue < 0) {
                element.innerHTML += "<div style='float: left; width:33%; font-size: " + config.values2FontSize + " !important'><span style='color:red; font-size: 75% !important'> ▼ </span>" + yoyValue + "%</div>";
            } else {
                element.innerHTML += "<div style='float: left; width:33%; font-size: " + config.values2FontSize + " !important'>-</div>";
            }
            if (momValue > 0) {
                element.innerHTML += "<div style='float: left; width:33%; font-size: " + config.values2FontSize + " !important'><span style='color:green; font-size: 75% !important'> ▲ </span>" + momValue + "%</div>";
            } else if (momValue < 0) {
                element.innerHTML += "<div style='float: left; width:33%; font-size: " + config.values2FontSize + " !important'><span style='color:red; font-size: 75% !important'> ▼ </span>" + momValue + "%</div>";
            } else {
                element.innerHTML += "<div style='float: left; width:33%; font-size: " + config.values2FontSize + " !important'>-</div>";
            }
            if (targetValue > 0) {
                element.innerHTML += "<div style='float: left; width:33%; font-size: " + config.values2FontSize + " !important'><span style='color:green; font-size: 75% !important'> ▲ </span>" + targetValue + "%</div>";
            } else if (targetValue < 0) {
                element.innerHTML += "<div style='float: left; width:33%; font-size: " + config.values2FontSize + " !important'><span style='color:red; font-size: 75% !important'> ▼ </span>" + targetValue + "%</div>";
            } else {
                element.innerHTML += "<div style='float: left; width:33%; font-size: " + config.values2FontSize + " !important'>-</div>";
            }
        } else {
            if (yoyValue > 0) {
                element.innerHTML += "<div style='float: left; width:50%; font-size: " + config.values2FontSize + " !important'><span style='color:green; font-size: 75% !important'> ▲ </span>" + yoyValue + "%</div>";
            } else if (yoyValue < 0) {
                element.innerHTML += "<div style='float: left; width:50%; font-size: " + config.values2FontSize + " !important'><span style='color:red; font-size: 75% !important'> ▼ </span>" + yoyValue + "%</div>";
            } else {
                element.innerHTML += "<div style='float: left; width:50%; font-size: " + config.values2FontSize + " !important'>-</div>";
            }
            if (momValue > 0) {
                element.innerHTML += "<div style='float: left; width:50%; font-size: " + config.values2FontSize + " !important'><span style='color:green; font-size: 75% !important'> ▲ </span>" + momValue + "%</div>";
            } else if (momValue < 0) {
                element.innerHTML += "<div style='float: left; width:50%; font-size: " + config.values2FontSize + " !important'><span style='color:red; font-size: 75% !important'> ▼ </span>" + momValue + "%</div>";
            } else {
                element.innerHTML += "<div style='float: left; width:50%; font-size: " + config.values2FontSize + " !important'>-</div>";
            }
        }
        element.innerHTML += "</div>"

        doneRendering();
    }
});
