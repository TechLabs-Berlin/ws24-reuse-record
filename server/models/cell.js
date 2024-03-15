const mongoose = require("mongoose");
const { Schema } = mongoose;

const cellSchema = new Schema({
    // Measurements
    width: {
        type: Number,
        required: [true, "cell must have a width"]
    },
    hight: {
        type: Number,
        required: [true, "cell must have a hight"]
    },

    // possible entries ["null", "fixed", "openable", "parapet"]
    type: {
        type: String,
        lowercase: true,
        enum: ["null", "fixed", "openable", "parapet"],
        required: [true, "cell must have a type"]
    },

    // Sup
    grid:
    {
        type: Schema.Types.ObjectId,
        ref: "grid"
    },

    //    Sub
    frame:
    {
        type: Schema.Types.ObjectId,
        ref: "frame"
    },
    glas:
    {
        type: Schema.Types.ObjectId,
        ref: "glas"
    },

})


const cell = mongoose.model("cell", cellSchema);

module.exports = cell;