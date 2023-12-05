looker.plugins.visualizations.add({
    options: {
        htmlTemplate: {
            type: "string",
            label: "Value: add unit",
            default: `<div>{{ value }}</div>`
        },
        addedUnit: {
            type: "string",
            label: "Value: Overwrite",
            default: ``
        },
        measureText: {
            type: "string",
            label: "Label: Overwrite",
            default: `<div>{{ value }}</div>`
        },
        conditionTxt: {
            type: "string",
            label: "Alert: Indicate when below",
            placeholder: "0"
        },
        textColor: {
            type: "string",
            label: "Text: Color",
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
            display: "select",
            values: [
                {"Big": "20rem"},
                {"Med": "10rem"},
                {"Small": "5rem"}
            ],
            default: "Med"
        }
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
        }

        const htmlFormatted = htmlTemplate.replace(/{{.*}}/g, htmlForCell);

        element.innerHTML = htmlFormatted + config.addedUnit;

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

        if (config.measureText) {
            element.innerHTML += "<div style='font-size: 2rem;'>" + config.measureText + "</div>";
        } else {
            let text =  qFields.dimension_like.length > 0 ? qFields.dimension_like[0].label_short : qFields.measure_like[0].label_short;
            element.innerHTML += "<div style='font-size: 2rem;'>" + text + "</div>";
        }

        doneRendering();
    }
});
