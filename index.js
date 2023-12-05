looker.plugins.visualizations.add({
    options: {
        htmlTemplate: {
            type: "string",
            label: "Overwrite value",
            default: `{{ value }}`
        },
        measureText: {
            type: "string",
            label: "Overwrite label",
            default: `{{ value }}`
        },
        conditionTxt: {
            type: "string",
            label: "Indicate when below",
            placeholder: "0"
        },
        textColor: {
            type: "string",
            label: "Text Color",
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
        verticalAlign:{
            type: "string",
            label: "Text Alignment",
            display: "select",
            values: [
                {"Center": "baseline"},
                {"Top": "text-top"},
                {"Bottom": "text-bottom"}
            ],
            default: "Center"
        },
        fontSize: {
            type: "string",
            label: "Text Size",
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
        const secondRow = data[1];
        const qFields = queryResponse.fields;

        if (qFields.dimension_like.length === 0 &&
            qFields.measure_like.length === 0) {
            this.addError({
                title: `No visible fields`,
                message: `At least one dimension, measure or table calculation needs to be visible.`
            })
        }


        let firstCell = firstRow[qFields.dimension_like.length > 0 ? qFields.dimension_like[0].name : qFields.measure_like[0].name];
        let secondCell = firstRow[qFields.dimension_like.length > 0 ? qFields.dimension_like[1].name : qFields.measure_like[1].name];

        let thirdCell = secondRow[qFields.dimension_like.length > 0 ? qFields.dimension_like[0].name : qFields.measure_like[0].name];
        let fourthCell = secondRow[qFields.dimension_like.length > 0 ? qFields.dimension_like[1].name : qFields.measure_like[1].name];


        let htmlForCell = "";
        let htmlForCell1 = LookerCharts.Utils.filterableValueForCell(firstCell);
        let htmlForCell2 = LookerCharts.Utils.filterableValueForCell(secondCell);

        element.innerHTML = "1/1 : " + LookerCharts.Utils.filterableValueForCell(firstCell);
        element.innerHTML += "1/2 : " + LookerCharts.Utils.filterableValueForCell(secondCell);
        element.innerHTML = "2/1 : " + LookerCharts.Utils.filterableValueForCell(thirdCell);
        element.innerHTML += "2/2 : " + LookerCharts.Utils.filterableValueForCell(fourthCell);
/*
        const htmlTemplate = config && config.htmlTemplate || this.options.htmlTemplate.default;


        if (!isNaN(htmlForCell1))  {
            htmlForCell = parseInt(htmlForCell1);
        } else if (!isNaN(htmlForCell2)) {
            htmlForCell = parseInt(htmlForCell2);
        } else {
            htmlForCell = htmlForCell1 && typeof (htmlForCell1) !== undefined ? htmlForCell1 : htmlForCell2;
        }

        const htmlFormatted = htmlTemplate.replace(/{{.*}}/g, htmlForCell);

        element.innerHTML = htmlFormatted;

        if (isNumber && parseInt(config.conditionTxt) > htmlForCell) {
            element.style.color = "#F7F7F7";
            element.style.backgroundColor = "red";
        } else {
            element.style.color = "#333333";
            element.style.backgroundColor = "#F7F7F7";
        }

        element.style.fontFamily = 'Georgia, serif';
        element.style.color = config.textColor;
        element.style.fontSize = config.fontSize;
        element.style.textAlign = "center";
        element.style.verticalAlign = config.verticalAlign;

        if (config.measureText) {
            element.innerHTML += "<div style='font-size: 2rem;'>" + config.measureText + "</div>";
        } else {
            element.innerHTML += "<div style='font-size: 2rem;'>" + qFields.dimension_like[0].label_short  || qFields.measure_like[0].label_short + "</div>";
        }
*/
        doneRendering();
    }
});
