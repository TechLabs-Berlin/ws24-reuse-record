const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
    // Measurements
    width: {
        type: Number,
        required: [true, "frame must have a width"]
    },
    offsetOutXY: {
        type: Number,
        required: [true, "frame must have an offsetOutXY:"]
    },
    offsetInXY: {
        type: Number,
        required: [true, "frame must have an offsetInXY:"]
    },
    depth: {
        type: Number,
        required: [true, "frame must have a depth"]
    },

    // Sup
    frame:
    {
        type: Schema.Types.ObjectId,
        ref: "frame"
    }

    //    Sub
})


const profile = mongoose.model("profile", profileSchema);

module.exports = profile;