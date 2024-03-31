const mongoose = require("mongoose");
const { Schema } = mongoose;

const windowFrameSchema = new Schema({
    // Sup
    windowGrid:
    {
        type: Schema.Types.ObjectId,
        ref: "windowGrid"
    },
    windowCell:
    {
        type: Schema.Types.ObjectId,
        ref: "windowCell"
    },

    //    Sub

    // PROPERTIES
    // Measurements
    profileWidth: {
        type: Number,
        required: [true, "windowFrame must have a width"]
    },
    profileDepth: {
        type: Number,
        required: [true, "windowFrame must have a depth"]
    }
})


const windowFrame = mongoose.model("windowFrame", windowFrameSchema);

module.exports = windowFrame;