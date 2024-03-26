// window?.grid?.frame?.width
// window?.grid?.frame?.height
// window?.grid?.count?.x
// window?.grid?.count?.y
// window?.grid?.factor?.x
// window?.grid?.factor?.y
// window?.grid?.cells[i]?.frame?.profile?.depth



// // Grid

// seedWindow.grid.count.x = 3;
// seedWindow.grid.count.y = 3;


// thisStep = lastStep;

// lastStep.grid.frame.width = 120;
// lastStep.grid.frame.height = 240;

// lastStep.grid.cells[0].type = "fixed";

// const thisStep = windowCalc(lastStep)

const _ = require('lodash');

// export 
function windowCalc(input) {

    // Default without Cells

    const defaultGrid = {
        grid: {
            "width": 100,
            "height": 100,
            "count": {
                "x": 1,
                "y": 1
            },
            "frame": {
                "material": "pvc",
                "surface": "natural",
                "colour": "white",
                "profile": {
                    "width": 8,
                    "offsetOutXY": 2,
                    "depth": 6
                }
            },
        }
    }

    // Merges the input object with the default object to set default values for missing properties
    const result = _.merge({}, fallback, input);





    // // !!!CHANGE: dependent on count
    // window?.grid?.factor?.x ?? [1];
    // window?.grid?.factor?.y ?? [1];

    // for (let i = 0; i < window.gird.count.x * window.grid.count.y; i++) {
    //     window?.grid?.cells[i]?.frame?.profile?.depth ?? 8;
    // }


    // // Defaults

    // window.grid.frame.profile.width = 8;
    // window.grid.frame.profile.offsetOutXY = 2;
    // window.grid.frame.profile.depth = 8;

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


let inputObject = {
    grid: {
        width: 50,
        height: 50
    }
};



const resultObject = windowCalc(inputObject);
console.log(inputObject);
console.log(resultObject);






