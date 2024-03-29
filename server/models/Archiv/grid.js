const mongoose = require("mongoose");
const { Schema } = mongoose;

const gridSchema = new Schema({
    // Measurements
    width: {
        type: Number,
        // required: [true, "grid must have a width"]
    },
    height: {
        type: Number,
        // required: [true, "grid must have a hight"]
    },

    // Layout
    count: {
        x: {
            type: Number,
            // required: [true, "grid must have a count.x"]
        },
        y: {
            type: Number,
            // required: [true, "grid must have a count.y"]
        },
    },
    factor: {
        x: [
            {
                type: Number,
                // required: [true, "grid must have a factor.x"]
            }
        ],
        y: [
            {
                type: Number,
                // required: [true, "grid must have a factor.y"]
            }
        ],
    },

    // Sub
    frame:
    {
        // Measurements
        width: {
            type: Number,
            // required: [true, "frame must have a width"]
        },
        hight: {
            type: Number,
            // required: [true, "frame must have a hight"]
        },

        // Materiality
        material: {
            type: String,
            // required: [true, "frame must have a material"]
        },
        surface: {
            type: String,
            // required: [true, "frame must have a surface"]
        },
        colour: {
            type: String,
            // required: [true, "frame must have a colour"]
        },

        //    Sub
        profile:
        {
            // Measurements
            width: {
                type: Number,
                // required: [true, "frame must have a width"]
            },
            offsetOutXY: {
                type: Number,
                // required: [true, "frame must have an offsetOutXY:"]
            },
            offsetInXY: {
                type: Number,
                // required: [true, "frame must have an offsetInXY:"]
            },
            depth: {
                type: Number,
                // required: [true, "frame must have a depth"]
            }
        }
    },
    cells: [
        {
            // Measurements
            width: {
                type: Number,
                // required: [true, "cell must have a width"]
            },
            height: {
                type: Number,
                // required: [true, "cell must have a hight"]
            },

            // possible entries ["null", "fixed", "openable", "parapet"]
            type: {
                type: String,
                lowercase: true,
                enum: ["null", "fixed", "openable", "parapet"],
                // required: [true, "cell must have a type"]
            },

            //    Sub
            frame:
            {
                // Measurements
                width: {
                    type: Number,
                    // required: [true, "frame must have a width"]
                },
                height: {
                    type: Number,
                    // required: [true, "frame must have a height"]
                },

                // Materiality
                material: {
                    type: String,
                    // required: [true, "frame must have a material"]
                },
                surface: {
                    type: String,
                    // required: [true, "frame must have a surface"]
                },
                colour: {
                    type: String,
                    // required: [true, "frame must have a colour"]
                },

                //    Sub
                profile:
                {
                    // Measurements
                    width: {
                        type: Number,
                        // required: [true, "frame must have a width"]
                    },
                    offsetOutXY: {
                        type: Number,
                        // required: [true, "frame must have an offsetOutXY:"]
                    },
                    offsetInXY: {
                        type: Number,
                        // required: [true, "frame must have an offsetInXY:"]
                    },
                    depth: {
                        type: Number,
                        // required: [true, "frame must have a depth"]
                    }
                }
            },
            glass:
            {
                // Measurements
                width: {
                    type: Number,
                    // required: [true, "glas must have a width"]
                },
                height: {
                    type: Number,
                    // required: [true, "glas must have a hight"]
                },

                // possible entries ["single", "double", "triple"]
                type: {
                    type: String,
                    lowercase: true,
                    enum: ["single", "double", "triple"],
                    // required: [true, "glas must have a type"]
                }
            }
        }
    ]
})


const grid = mongoose.model("grid", gridSchema);

module.exports = grid;