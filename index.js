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
            default: `{{ value }}`
        },
        fontSize: {
            type: "string",
            label: "Text: Size",
            section: "Value",
            default: "8vw"
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
        addedUnit: {
            type: "string",
            label: "Value: Add unit",
            section: "Value",
            default: ``
        },
        freshnessIconDim: {
            type: "string",
            label: "Icon: Pick dimension",
            section: "Data Freshness",
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
            section: "Data Freshness",
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
            label: "Label: Set font size",
            section: "Label",
            default: `5vw`
        },
        conditionTxt: {
            type: "string",
            label: "Alert: Indicate when below",
            section: "Value",
            placeholder: "0"
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
            label: "Set font size",
            section: "Comparision",
            default: `3vw`
        },
        yoyLabel: {
            type: "string",
            label: "Value 1: Overwrite label",
            section: "Comparision",
            default: ``
        },
        yoyDim: {
            type: "string",
            label: "Value 1: Pick dimension",
            section: "Comparision",
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
            section: "Comparision",
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
            section: "Comparision",
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
            section: "Comparision",
            default: ``
        },
        momDim: {
            type: "string",
            label: "Value 2: Pick dimension",
            section: "Comparision",
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
            section: "Comparision",
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
            section: "Comparision",
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
            section: "Comparision",
            default: ``
        },
        fromTargetDim: {
            type: "string",
            label: "Value 3: Pick dimension",
            section: "Comparision",
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
            section: "Comparision",
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
            section: "Comparision",
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
        console.log('htmlForCell 0 : ', htmlForCell);
        if (htmlForCell && !isNaN(htmlForCell)) {
            console.log('htmlForCell 1 : ', htmlForCell);
            isNumber = true;
            htmlForCell = parseInt(htmlForCell);

            htmlForCell = htmlForCell.toLocaleString(
                config.formatValue, // leave undefined to use the visitor's browser
                // locale or a string like 'en-US' to override it.
                { minimumFractionDigits: parseInt(config.formatDigits) }
            );

            htmlFormatted = htmlTemplate.replace(/{{.*}}/g, htmlForCell + " " + config.addedUnit);
        }


        element.innerHTML = htmlFormatted;
        element.style.backgroundColor = config.backgroundColor;
        element.style.color = config.textColor;

        if (isNumber && parseInt(config.conditionTxt) > htmlForCell) {
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
            console.log('frehsness : ', freshness)
            if (freshness === "Yes") {
                element.innerHTML += "<div style='font-size: 50%; float: right; color: green; margin: 5px;'> ♺ </div>";
            } else if (freshness === "No") {
                element.innerHTML += "<div style='font-size: 50%; float: right; color: red; margin: 5px;'> ♺ </div>";
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
