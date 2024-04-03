const { windowCalc } = require('./calc.js');


let inputObject = {
    grid: {
        count: {
            x: 2,
            y: 2
        },
        frame: {
            width: 100,
            height: 100
        },
        cells: [
            { type: "openable" },
            { type: "openable" },
            { type: "fixed" },
            { type: "fixed" }
        ]
    }

};


const resultObject = windowCalc(inputObject);
console.log(inputObject);
console.log(JSON.stringify(resultObject, null, 2));