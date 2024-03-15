const mongoose = require("mongoose");
const { Schema } = mongoose;

const windowGridSchema = new Schema({
    // Sup
    windowAssembly:
    {
        type: Schema.Types.ObjectId,
        ref: "windowAssembly"
    },

    //    Sub
    windowFrame:
    {
        type: Schema.Types.ObjectId,
        ref: "windowFrame"
    },
    windowCells: [
        {
            type: Schema.Types.ObjectId,
            ref: "windowCell"
        }
    ],

    // PROPERTIES
    // Layout
    gridCountX: {
        type: Number,
        required: [true, "windowGrid must have a gridCountX"]
    },
    gridCountY: {
        type: Number,
        required: [true, "windowGrid must have a gridCountY"]
    },

    // Measurements
    gridWidth: {
        type: Number,
        required: [true, "windowGrid must have a width"]
    },
    gridHight: {
        type: Number,
        required: [true, "windowGrid must have a hight"]
    },

    // Modifier
    profileOffsetXY: {
        type: Number,
        required: [true, "windowGrid must have an OffsetXY"]
    },
    profileOffsetZ: {
        type: Number,
        required: [true, "windowGrid must have an OffsetZ"]
    },

    // Materiality
    frameMaterial: {
        type: String
    },
    frameSurface: {
        type: String
    },
    frameColour: {
        type: String
    }
})


const windowGrid = mongoose.model("windowGrid", windowGridSchema);

module.exports = windowGrid;