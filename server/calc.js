



export function windowCalc(window) {

    // User Input

    window?.grid?.frame?.width ?? 100;
    window?.grid?.frame?.hight ?? 100;
    window?.grid?.count?.x ?? 1;
    window?.grid?.count?.y ?? 1;

    // !!!CHANGE: dependent on count
    window?.grid?.factor?.x ?? [1];
    window?.grid?.factor?.y ?? [1];

    for (let i = 0; i < window.gird.count.x * window.grid.count.y; i++) {
        window.grid.cells[i].frame.profile.depth ?? 8;
    }


    // Defaults

    window.grid.frame.profile.width = 8;
    window.grid.frame.profile.offsetOutXY = 2;
    window.grid.frame.profile.depth = 8;

    for (let i = 0; i < window.gird.count.x * window.grid.count.y; i++) {
        window.grid.cells[i].frame.profile.width = 8;
        window.grid.cells[i].frame.profile.offsetOutXY = 2;
        window.grid.cells[i].frame.profile.offsetZ = 2;
    }





    const result = window;
    // result = (obj?.a ?? 1) * (obj?.b ?? 1);

    // Calculations

    //Grid

    grid.width = grid.frame.width - grid.frame.profile.offsetOutXY;
    grid.hight = grid.frame.hight - grid.frame.profile.offsetOutXY;

    grid.cells[i].width = grid.width / grid.count.x * grid.factor.x[i % grid.factor.x.length];
    grid.cells[i].hight = grid.hight / grid.count.y * grid.factor.y[i % grid.factor.y.length];

    // Frame

    grid.cells[i].frame.width = grid.cells[i].width - 2 * grid.frame.profile.offsetOutXY + 2 * grid.cells[i].frame.profile.offsetOutXY;
    grid.cells[i].frame.hight = grid.cells[i].hight - 2 * grid.frame.profile.offsetOutXY + 2 * grid.cells[i].frame.profile.offsetOutXY;

    // Profile

    grid.frame.profile.offsetInXY = grid.frame.profile.width - grid.frame.profile.offsetOutXY;
    grid.cells[i].frame.profile.offsetInXY = grid.cells[i].frame.profile.width - grid.cells[i].frame.profile.offsetOutXY;

    // Glas

    grid.cells[i].glas.width = grid.cells[i].width - grid.frame.profile.offsetInXY - grid.cells[i].frame.profile.offsetInXY;
    grid.cells[i].glas.hight = grid.cells[i].hight - grid.frame.profile.offsetInXY - grid.cells[i].frame.profile.offsetInXY;


    return result;
}









