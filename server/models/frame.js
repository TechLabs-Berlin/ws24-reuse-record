const mongoose = require("mongoose");
const { Schema } = mongoose;

const frameSchema = new Schema({
    // Measurements
    width: {
        type: Number,
        required: [true, "frame must have a width"]
    },
    depth: {
        type: Number,
        required: [true, "frame must have a depth"]
    },

    // Materiality
    material: {
        type: String,
        required: [true, "frame must have a material"]
    },
    surface: {
        type: String,
        required: [true, "frame must have a surface"]
    },
    colour: {
        type: String,
        required: [true, "frame must have a colour"]
    },

    // Sup
    grid:
    {
        type: Schema.Types.ObjectId,
        ref: "grid"
    },
    cell:
    {
        type: Schema.Types.ObjectId,
        ref: "cell"
    },

    //    Sub
    profile:
    {
        type: Schema.Types.ObjectId,
        ref: "profile"
    }
})


const frame = mongoose.model("frame", frameSchema);

module.exports = frame;