looker.plugins.visualizations.add({
    options: {
        htmlTemplate: {
            type: "string",
            label: "Override value",
            default: `{{ value }}`
        },
        htmlSubtitle: {
            type: "string",
            label: "Set subtitle",
            default: `{{ value }}`
        },
        conditionTxt: {
            type: "string",
            label: "Alert when below",
            placeholder: "0"
        },
        textColor: {
            type: "string",
            label: "Text Color",
            display: "select",
            values: [
                {"Black": "#000"},
                {"White": "#FFF"},
                {"Blue": "#0040ff"},
                {"Green": "#1ca616"},
                {"Orange": "#ff9800"}
            ],
            default: "Black"
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
            default: "Big"
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

        const firstCell = firstRow[qFields.dimension_like.length > 0 ? qFields.dimension_like[0].name : qFields.measure_like[0].name];

        let htmlForCell = LookerCharts.Utils.filterableValueForCell(firstCell);
        const htmlTemplate = config && config.htmlTemplate || this.options.htmlTemplate.default;

        let isNumber = false;
        if (!isNaN(htmlForCell)) {
            isNumber = true;
            htmlForCell = parseInt(htmlForCell);
        }

        const htmlFormatted = htmlTemplate.replace(/{{.*}}/g, htmlForCell);

        element.innerHTML = htmlFormatted;

        if (isNumber && parseInt(config.conditionTxt) > htmlForCell) {
            element.style.color = "white";
            element.style.backgroundColor = "red";
        } else {
            element.style.color = "black";
            element.style.backgroundColor = "white";
        }

        element.style.fontFamily = 'sans-serif';
        element.style.color = config.textColor;
        element.style.fontSize = config.fontSize;
        element.style.textAlign = "center";
        //element.innerHTML += "<div style='font-size: 2rem;'>" + config.htmlSubtitle + "</div>";
        //element.innerHTML += "<div style='font-size: 2rem;'>yo</div>";
        //element.innerHTML += "<div style='font-size: 2rem;'>l: " + qFields.dimension_like[0].name + "</div>";
        //element.innerHTML += "<div style='font-size: 2rem;'>m: " + qFields.measure_like[0].name + "</div>";
        element.innerHTML += "<div style='font-size: 2rem;'>do</div>";

        doneRendering();
    }
});