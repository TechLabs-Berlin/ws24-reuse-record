const mongoose = require("mongoose");
const { Schema } = mongoose;

const windowGlasSchema = new Schema({
    // Sup
    windowCell:
    {
        type: Schema.Types.ObjectId,
        ref: "windowCell"
    },

    //    Sub

    // PROPERTIES
    // Measurements
    glasWidthDerived: {
        type: Number,
        required: [true, "windowGlas must have a width"]
    },
    glasHightDerived: {
        type: Number,
        required: [true, "windowGlas must have a hight"]
    }
})


const windowGlas = mongoose.model("windowGlas", windowGlasSchema);

module.exports = windowGlas;