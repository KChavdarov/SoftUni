function metricConverter(value, input, output) { //Kiril
    let inputLength = Number(value);
    let inputUnitofMeasurement = input;
    let outputUnitofMeasurement = output;
    let outputLength;
    if (inputUnitofMeasurement === "m") {
        if (outputUnitofMeasurement === "mm") {
            outputLength = inputLength * 1000;
        } else if (outputUnitofMeasurement === "cm") {
            outputLength = inputLength * 100;
        }
    } else if (inputUnitofMeasurement === "cm") {
        if (outputUnitofMeasurement === "mm") {
            outputLength = inputLength * 10;
        } else if (outputUnitofMeasurement === "m") {
            outputLength = inputLength * 0.01;
        }
    } else if (inputUnitofMeasurement === "mm") {
        if (outputUnitofMeasurement === "cm") {
            outputLength = inputLength * 0.1;
        } else if (outputUnitofMeasurement === "m") {
            outputLength = inputLength * 0.001;
        }
    }
    console.log(outputLength.toFixed(3));
}
metricConverter("45","cm","mm");

function metricConverter2(value, input, output) { //Miro
    let inputLength = Number(value); // in centimeters
    let inputUnitofMeasurement = input;
    let outputUnitofMeasurement = output;
    let outputLength;

    if (inputUnitofMeasurement === "m") { //converting input to cm
        inputLength = inputLength * 100;
    } else if (inputUnitofMeasurement === "mm") {
        inputLength = inputLength * 0.1;
    }
    if (outputUnitofMeasurement === "m") {
        outputLength = inputLength * 0.01;
    }else if (outputUnitofMeasurement === "mm") {
        outputLength = inputLength * 10;
    }else if (outputUnitofMeasurement === "cm") {
        outputLength = inputLength;
    }
    console.log(outputLength.toFixed(3));
}
metricConverter2("45","cm","cm");