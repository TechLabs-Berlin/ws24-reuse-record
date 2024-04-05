const { windowCalc } = require('./calc.js');
const axios = require('axios');

// const inputObject = {
//     grid: {
//         count: {
//             x: 2,
//             y: 2
//         },
//         factor: {
//             "x": [1, 2],
//             "y": [1, 2],
//         },
//         frame: {
//             width: 100,
//             height: 100
//         },
//         cells: [
//             { type: "fixed" },
//             { type: "fixed" },
//             { type: "fixed" },
//             { type: "fixed" }
//         ]
//     }

// };

const inputObject = {
    "grid": {
        "width": 96,
        "height": 96,
        "count": {
            "x": 2,
            "y": 2,
            "total": 4
        },
        "factor": {
            "input": {
                "x": [
                    1,
                    2
                ],
                "y": [
                    1,
                    2
                ]
            },
            "sum": {
                "x": 3,
                "y": 3
            },
            "res": {
                "x": [
                    0.3333333333333333,
                    0.6666666666666666,
                    0.3333333333333333,
                    0.6666666666666666
                ],
                "y": [
                    0.3333333333333333,
                    0.3333333333333333,
                    0.6666666666666666,
                    0.6666666666666666
                ]
            }
        },
        "frame": {
            "width": 100,
            "height": 50,
            "material": "pvc",
            "surface": "natural",
            "colour": "white",
            "profile": {
                "width": 8,
                "offsetOutXY": 2,
                "offsetInXY": 6,
                "depth": 6
            }
        },
        "cells": [
            {
                "width": 32,
                "height": 32,
                "type": "fixed",
                "glass": {
                    "width": 20,
                    "height": 20,
                    "type": "double"
                }
            },
            {
                "width": 64,
                "height": 32,
                "type": "fixed",
                "glass": {
                    "width": 52,
                    "height": 20,
                    "type": "double"
                }
            },
            {
                "width": 32,
                "height": 64,
                "type": "fixed",
                "glass": {
                    "width": 20,
                    "height": 52,
                    "type": "double"
                }
            },
            {
                "width": 64,
                "height": 64,
                "type": "fixed",
                "glass": {
                    "width": 52,
                    "height": 52,
                    "type": "double"
                }
            }
        ]
    }
}

try {
    const resultObject = windowCalc(inputObject);
    console.log(inputObject);
    console.log(JSON.stringify(resultObject, null, 2));

    axios.post('http://localhost:3000/windows', resultObject)
        .then(res => {
            console.log('Response:', res.data);
        })
        .catch(err => {
            console.error('Error:', err.response.data);
        });

} catch (err) {
    console.error("Error:", err.message);
}



// axios.post('http://localhost:3000/windows', {})
//     .then(res => {
//         console.log('Response:', res.data);
//     })
//     .catch(err => {
//         console.error('Error:', err.response.data)
//     });
