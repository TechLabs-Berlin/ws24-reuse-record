import { Grid } from '@/data/data';
import _ from 'lodash';

export function windowCalc(input: any): {grid: Grid} {

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
                "width": 304,
                "height": 304,
                "material": "pvc",
                "surface": "natural",
                "colour": "white",
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


    // CELL LEVEL

    // Default
    const defaultCell = {
        "width": null,
        "height": null,
        "type": "openable",
        "frame": {
            "width": null,
            "height": null,
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
        }
    }


    adjustArray(result.grid.count.total, result.grid.cells, defaultCell);

    // Calculations
    for (let cell of result.grid.cells) {
        // for now without factor
        cell.width = result.grid.width / result.grid.count.x;
        cell.height = result.grid.height / result.grid.count.y;
    }


    // if (result.grid.count.total > result.grid.cells.length) {
    //     const missing = result.grid.count.total - result.grid.cells.length;
    //     for (let i = 0; i < missing; i++) {
    //         result.grid.cells.push(defaultCell);
    //     }
    // } else if (result.grid.count.total < result.grid.cells.length) {
    //     const excess = result.grid.cells.length - result.grid.count.total;
    //     for (let i = 0; i < missing; i++) {
    //         result.grid.cells.pop();
    //     }
    // }



    // for (let i = 0; i < window.gird.count.x * window.grid.count.y; i++) {
    //     window?.grid?.cells[i]?.frame?.profile?.depth ?? 8;
    // }


    // // Defaults

    // for (let i = 0; i < window.gird.count.x * window.grid.count.y; i++) {
    //     window.grid.cells[i].frame.profile.width = 8;
    //     window.grid.cells[i].frame.profile.offsetOutXY = 2;
    //     window.grid.cells[i].frame.profile.offsetZ = 2;
    // }



    // // Calculations

    // //Grid

    // grid.width = grid.frame.width - grid.frame.profile.offsetOutXY;
    // grid.hight = grid.frame.height - grid.frame.profile.offsetOutXY;

    // grid.cells[i].width = grid.width / grid.count.x * grid.factor.x[i % grid.factor.x.length];
    // grid.cells[i].height = grid.height / grid.count.y * grid.factor.y[i % grid.factor.y.length];

    // // Frame

    // grid.cells[i].frame.width = grid.cells[i].width - 2 * grid.frame.profile.offsetOutXY + 2 * grid.cells[i].frame.profile.offsetOutXY;
    // grid.cells[i].frame.height = grid.cells[i].height - 2 * grid.frame.profile.offsetOutXY + 2 * grid.cells[i].frame.profile.offsetOutXY;

    // // Profile

    // grid.frame.profile.offsetInXY = grid.frame.profile.width - grid.frame.profile.offsetOutXY;
    // grid.cells[i].frame.profile.offsetInXY = grid.cells[i].frame.profile.width - grid.cells[i].frame.profile.offsetOutXY;

    // // Glas

    // grid.cells[i].glas.width = grid.cells[i].width - grid.frame.profile.offsetInXY - grid.cells[i].frame.profile.offsetInXY;
    // grid.cells[i].glas.height = grid.cells[i].height - grid.frame.profile.offsetInXY - grid.cells[i].frame.profile.offsetInXY;


    return result;
}


// let inputObject = {
//     grid: {
//         count: {
//             x: 2,
//             y: 2
//         },
//         frame: {
//             width: 50,
//             height: 50
//         }
//     }

// };



// const resultObject = windowCalc(inputObject);
// console.log(inputObject);
// console.log(JSON.stringify(resultObject, null, 2));






