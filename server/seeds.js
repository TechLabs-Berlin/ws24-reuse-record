const mongoose = require("mongoose");

const Grid = require("./models/grid");

mongoose.connect('mongodb://127.0.0.1:27017/reuseRecord')
    .then(() => {
        console.log("Mongo Connection Open!")
    })
    .catch(err => {
        console.log(" Oh No Mongo Connection Error!!")
        console.log(err)
    })


const seedGrids = [
    {
        // Layout
        count: {
            x: 2,
            y: 2
        }
        // //    Sub
        // cells: [
        //     {
        //         // possible entries ["null", "fixed", "openable", "parapet"]
        //         type: "openable",
        //     },
        //     {
        //         // possible entries ["null", "fixed", "openable", "parapet"]
        //         type: "openable",
        //     },
        //     {
        //         // possible entries ["null", "fixed", "openable", "parapet"]
        //         type: "openable",
        //     },
        //     {
        //         // possible entries ["null", "fixed", "openable", "parapet"]
        //         type: "openable",
        //     },
        // ]
    }
]

Grid.insertMany(seedGrids)
    .then(res => {
        console.log(res);
    })
    .catch(r => {
        console.log(e);
    })