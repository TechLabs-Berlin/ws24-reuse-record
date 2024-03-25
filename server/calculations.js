// User Input

grid.frame.width =
    grid.frame.hight =
    grid.count.x =
    grid.count.y =
    grid.factor.x = []
grid.factor.y = []
grid.cells[i].frame.profile.depth =


    // Defaults

    grid.frame.profile.width = 8
grid.frame.profile.offsetOutXY = 2
grid.cells[i].frame.profile.width = 8
grid.cells[indexedDB].frame.profile.offsetOutXY = 2

grid.cells[i].frame.profile.offsetZ = 2
grid.frame.profile.depth = 8


// Calculations

//Grid

grid.width = grid.frame.width - grid.frame.profile.offsetOutXY
grid.hight = grid.frame.hight - grid.frame.profile.offsetOutXY

grid.cells[i].width = grid.width / grid.count.x * grid.factor.x[i % grid.factor.x.length]
grid.cells[i].hight = grid.hight / grid.count.y * grid.factor.y[i % grid.factor.y.length]

// Frame

grid.cells[i].frame.width = grid.cells[i].width - 2 * grid.frame.profile.offsetOutXY + 2 * grid.cells[i].frame.profile.offsetOutXY
grid.cells[i].frame.hight = grid.cells[i].hight - 2 * grid.frame.profile.offsetOutXY + 2 * grid.cells[i].frame.profile.offsetOutXY

// Profile

grid.frame.profile.offsetInXY = grid.frame.profile.width - grid.frame.profile.offsetOutXY
grid.cells[i].frame.profile.offsetInXY = grid.cells[i].frame.profile.width - grid.cells[i].frame.profile.offsetOutXY

// Glas

grid.cells[i].glas.width = grid.cells[i].width - grid.frame.profile.offsetInXY - grid.cells[i].frame.profile.offsetInXY
grid.cells[i].glas.hight = grid.cells[i].hight - grid.frame.profile.offsetInXY - grid.cells[i].frame.profile.offsetInXY

