const mongoose = require("mongoose");
const { Schema } = mongoose;

const gridSchema = new Schema({
    // Measurements
    width: {
        type: Number,
        required: [true, "grid must have a width"]
    },
    hight: {
        type: Number,
        required: [true, "grid must have a hight"]
    },

    // Layout
    count: {
        x: {
            type: Number,
            required: [true, "grid must have a count.x"]
        },
        y: {
            type: Number,
            required: [true, "grid must have a count.y"]
        },
    },
    factor: {
        x: [
            {
                type: Number,
                required: [true, "grid must have a factor.x"]
            }
        ],
        y: [
            {
                type: Number,
                required: [true, "grid must have a factor.y"]
            }
        ],
    },

    // Sup

    // Sub
    frame:
    {
        type: Schema.Types.ObjectId,
        ref: "frame"
    },
    cells: [
        {
            type: Schema.Types.ObjectId,
            ref: "cell"
        }
    ],
})


const grid = mongoose.model("grid", gridSchema);

module.exports = grid;