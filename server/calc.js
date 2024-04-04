const _ = require('lodash');


function windowCalc(input) {

    // Functions
    function adjustArray(count, factor, add) {
        if (count > factor.length) {
            const missing = count - factor.length;
            for (let i = 0; i < missing; i++) {
                factor.push(add);
            }
        } else if (count < factor.length) {
            const excess = factor.length - count;
            for (let i = 0; i < excess; i++) {
                factor.pop();
            }
        }
    }


    // GRID LEVEL

    // Default
    const defaultGrid = {
        grid: {
            "width": null,
            "height": null,
            "count": {
                "x": 1,
                "y": 1,
                "total": null
            },
            "factor": {
                "x": [1],
                "y": [1]
            },
            "frame": {
                "width": 104,
                "height": 104,
                "material": "pvc",
                "surface": "natural",
                "colour": "white",
                // "uValue": 1.2
                "profile": {
                    "width": 8,
                    "offsetOutXY": 2,
                    "offsetInXY": null,
                    "depth": 6
                }
            },
            "cells": []
        }
    }

    // Merges the input object with the default object to set default values for missing properties
    const result = _.merge({}, defaultGrid, input);

    // Calculations
    result.grid.width = result.grid.frame.width - result.grid.frame.profile.offsetOutXY * 2;
    result.grid.height = result.grid.frame.height - result.grid.frame.profile.offsetOutXY * 2;

    result.grid.count.total = result.grid.count.x * result.grid.count.y;

    result.grid.frame.profile.offsetInXY = result.grid.frame.profile.width - result.grid.frame.profile.offsetOutXY;

    // Factor x & y
    adjustArray(result.grid.count.x, result.grid.factor.x, 1);
    adjustArray(result.grid.count.y, result.grid.factor.y, 1);

    // Calulates the sums of the x & y factors
    result.grid.factor.sum = {};
    result.grid.factor.sum.x = result.grid.factor.x.reduce((acc, curr) => acc + curr, 0);
    result.grid.factor.sum.y = result.grid.factor.y.reduce((acc, curr) => acc + curr, 0);

    // CELL LEVEL

    // Default
    const defaultCell = {
        "width": null,
        "height": null,
        "type": "openable",
        "frame": {
            "width": null,
            "height": null,
            "material": "pvc",
            "surface": "natural",
            "colour": "white",
            // "uValue": 1.2
            "profile": {
                "width": 8,
                "offsetOutXY": 2,
                "offsetInXY": null,
                "depth": 6
            }
        },
        "glass": {
            "width": null,
            "height": null,
            "type": "double"
            // "uValue": 0.6
        }
    }


    adjustArray(result.grid.count.total, result.grid.cells, defaultCell);

    // Calculations
    for (let i = 0; i < result.grid.cells.length; i++) {
        // Merges the input object with the default object to set default values for missing properties
        result.grid.cells[i] = _.merge({}, defaultCell, result.grid.cells[i]);

        // Get the current cell
        let cell = result.grid.cells[i];

        // Calcutate resulting factors
        // result.grid.factor.res = {};
        // result.grid.factor.res.x[i] = result.grid.factor.x[i] / result.grid.factor.sum.x;
        // result.grid.factor.res.y[i] = result.grid.factor.y[i] / result.grid.factor.sum.y;
        // console.log(result.grid.factor.res);

        // Calculate cell width and hight
        cell.width = result.grid.width / result.grid.factor.x[i] / result.grid.factor.sum.x;
        cell.height = result.grid.height / result.grid.factor.y[i] / result.grid.factor.sum.y;
        console.log(cell.width);

        if (cell.type === "openable") {
            cell.frame.width = cell.width - result.grid.frame.profile.offsetInXY * 2 + cell.frame.profile.offsetOutXY * 2;
            cell.frame.height = cell.height - result.grid.frame.profile.offsetInXY * 2 + cell.frame.profile.offsetOutXY * 2;

            // take properties from grid.frame
            const { material, surface, colour, profile } = result.grid.frame;

            cell.frame = {
                material,
                surface,
                colour,
                profile: { ...profile }
            };

            cell.glass.width = cell.width - result.grid.frame.profile.offsetInXY * 2 - cell.frame.profile.offsetInXY;
            cell.glass.height = cell.height - result.grid.frame.profile.offsetInXY * 2 - cell.frame.profile.offsetInXY;
        } else if (cell.type === "fixed") {
            delete cell.frame;

            cell.glass.width = cell.width - result.grid.frame.profile.offsetInXY * 2;
            cell.glass.height = cell.height - result.grid.frame.profile.offsetInXY * 2;
        } else if (cell.type === "null") {
            const { type, ...other } = cell;
            result.grid.cells[i] = { type };
        }
    }


    return result;
}


module.exports = {
    windowCalc
};


