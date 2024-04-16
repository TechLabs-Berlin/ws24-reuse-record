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
            width: null,
            height: null,
            count: {
                x: 1,
                y: 1,
                total: null
            },
            factor: {
                input: {
                    x: [1],
                    y: [1]
                }
            },
            frame: {
                width: 104,
                height: 104,
                material: "pvc",
                surface: "natural",
                colour: "white",
                uValue: 1.5,
                profile: {
                    width: 8,
                    offsetOutXY: 2,
                    offsetInXY: null,
                    depth: 6
                }
            },
            cells: []
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
    for (let key in result.grid.factor.input) {
        adjustArray(result.grid.count[key], result.grid.factor.input[key], 1);
    }

    // VALIDATION
    // factor
    for (let key in result.grid.factor.input) {
        for (let value of result.grid.factor.input[key]) {
            if (value <= 0) {
                throw new Error(`Invalid factor ${key}. The value must be greater than 0.`);
            }
        }
    }

    // Calulates the sums of the x & y factors
    result.grid.factor.sum = {};
    for (let key in result.grid.factor.input) {
        result.grid.factor.sum[key] = result.grid.factor.input[key].reduce((acc, curr) => acc + curr, 0);
    }

    // Calucates the resulting factor for each cell
    function translateFactor(factor) {

        const res = {
            x: [],
            y: []
        };

        // Loop through each element in the 'y' array
        factor.input.y.forEach((yValue) => {
            // Repeat each 'yValue' count times and add to 'y' array in 'res'
            for (let i = 0; i < factor.input.x.length; i++) {
                res.y.push(yValue / factor.sum.y);
            }

            // Add each 'x' value followed by 'sumX' to the 'x' array in 'res'
            factor.input.x.forEach((xValue) => {
                res.x.push(xValue / factor.sum.x);
            });
        });

        return res;
    }

    result.grid.factor.res = translateFactor(result.grid.factor);

    // CELL LEVEL

    // Default
    const defaultCell = {
        width: null,
        height: null,
        type: "openable",
        frame: {
            width: null,
            height: null,
            material: "pvc",
            surface: "natural",
            colour: "white",
            uValue: 1.5,
            profile: {
                width: 8,
                offsetOutXY: 2,
                offsetInXY: null,
                depth: 6
            }
        },
        glass: {
            width: null,
            height: null,
            type: "double",
            uValue: 2.8,
            phiValue: 0.6
        }
    }


    adjustArray(result.grid.count.total, result.grid.cells, defaultCell);

    // Calculations
    for (let i = 0; i < result.grid.cells.length; i++) {
        // Merges the input object with the default object to set default values for missing properties
        result.grid.cells[i] = _.merge({}, defaultCell, result.grid.cells[i]);

        // Get the current cell
        let cell = result.grid.cells[i];

        // VALIDATION
        // glass.type
        if (!["single", "double", "triple"].includes(cell.glass.type)) {
            throw new Error("Invalid glass type. The type must be 'single', 'double', or 'triple'.");
        }
        // cell.type
        if (!["fixed", "openable", "null"].includes(cell.type)) {
            throw new Error("Invalid cell type. The type must be 'fixed', 'openable', or 'null'.");
        }

        // Calculate cell width and hight
        cell.width = result.grid.width * result.grid.factor.res.x[i];
        cell.height = result.grid.height * result.grid.factor.res.y[i];

        // Pick the right uValue
        switch (cell.glass.type) {
            case "double":
                cell.glass.uValue = 2.8;
                break;
            case "single":
                cell.glass.uValue = 5.8;
                break;
            case "triple":
                cell.glass.uValue = 0.6;
                break;
        }

        if (cell.type === "openable") {
            cell.frame.width = cell.width - result.grid.frame.profile.offsetInXY * 2 + cell.frame.profile.offsetOutXY * 2;
            cell.frame.height = cell.height - result.grid.frame.profile.offsetInXY * 2 + cell.frame.profile.offsetOutXY * 2;

            // take properties from grid.frame
            const { material, surface, colour, uValue, profile } = result.grid.frame;

            cell.frame = {
                material,
                surface,
                colour,
                uValue,
                profile: { ...profile }
            };
            // Caculate glass width and hight
            cell.glass.width = cell.width - result.grid.frame.profile.offsetInXY * 2 - cell.frame.profile.offsetInXY;
            cell.glass.height = cell.height - result.grid.frame.profile.offsetInXY * 2 - cell.frame.profile.offsetInXY;
        } else if (cell.type === "fixed") {
            delete cell.frame;
            // Caculate glass width and hight
            cell.glass.width = cell.width - result.grid.frame.profile.offsetInXY * 2;
            cell.glass.height = cell.height - result.grid.frame.profile.offsetInXY * 2;
        } else if (cell.type === "null") {
            // Delete all other properties other than type
            const { type, ...other } = cell;
            result.grid.cells[i] = { type };
        }

        // VALIDATION
        // glass.width & height
        if (cell.glass.width < 0) {
            throw new Error(`Glass width in cell ${i} below 0. Increase overall width or change factor / layout.`);
        } else if (cell.glass.height < 0) {
            throw new Error(`Glass height in cell ${i} below 0. Increase overall height or change factor / layout.`);
        }
    }

    return result;
}


module.exports = { windowCalc };


