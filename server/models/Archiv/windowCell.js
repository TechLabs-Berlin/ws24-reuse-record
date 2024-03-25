const mongoose = require("mongoose");
const { Schema } = mongoose;

const windowCellSchema = new Schema({
    // Sup
    windowGrid:
    {
        type: Schema.Types.ObjectId,
        ref: "windowGrid"
    },

    //    Sub
    windowFrame:
    {
        type: Schema.Types.ObjectId,
        ref: "windowFrame"
    },
    windowGlas:
    {
        type: Schema.Types.ObjectId,
        ref: "windowGlas"
    },

    // PROPERTIES
    type: {
        type: String,
        lowercase: true,
        enum: ["null", "fixed", "openable", "parapet"],
        required: [true, "windowCell must have a type"]
    }
})


const windowCell = mongoose.model("windowCell", windowCellSchema);

module.exports = windowCell;