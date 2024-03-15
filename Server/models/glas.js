const mongoose = require("mongoose");
const { Schema } = mongoose;

const glasSchema = new Schema({
    // Measurements
    width: {
        type: Number,
        required: [true, "glas must have a width"]
    },
    hight: {
        type: Number,
        required: [true, "glas must have a hight"]
    },

    // possible entries ["single", "double", "triple"]
    type: {
        type: String,
        lowercase: true,
        enum: ["single", "double", "triple"],
        required: [true, "glas must have a type"]
    },

    // Sup
    cell:
    {
        type: Schema.Types.ObjectId,
        ref: "cell"
    },

    //    Sub
})


const glas = mongoose.model("glas", glasSchema);

module.exports = glas;