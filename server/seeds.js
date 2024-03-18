const mongoose = require("mongoose");

const Window = require("./models/window");

// MongoDB Atlas connection string
const uri = "mongodb+srv://Baukreisel:0bufUFCoXzyNfxtk@reuserecord.lenyaxi.mongodb.net/reuseRecord?retryWrites=true&w=majority&appName=ReuseRecord";
// // MongoDB Local connection string
// const uri = "mongodb://127.0.0.1:27017/reuseRecord";

mongoose.connect(uri)
    .then(() => {
        console.log("Mongo Connection Open!")
    })
    .catch(err => {
        console.log(" Oh No Mongo Connection Error!!")
        console.log(err)
    })


const seedWindows = [
    {
        grid: {
            "width": 200,
            "height": 200,
            "count": {
                "x": 2,
                "y": 2
            },
            "factor": {
                "x": [1, 1],
                "y": [1, 1]
            },
            "frame": {
                "width": 204,
                "height": 204,
                "material": "wood",
                "surface": "stained",
                "colour": "brown",
                "profile": {
                    "width": 8,
                    "offsetOutXY": 2,
                    "offsetInXY": 6,
                    "depth": 6
                }
            },
            "cells": [
                {
                    "width": 100,
                    "height": 100,
                    "type": "openable",
                    "frame": {
                        "width": 92,
                        "height": 92,
                        "profile": {
                            "width": 8,
                            "offsetOutXY": 2,
                            "offsetInXY": 6,
                            "depth": 6
                        }
                    },
                    "glass": {
                        "width": 76,
                        "height": 76,
                        "type": "double"
                    }
                },
                {
                    "width": 100,
                    "height": 100,
                    "type": "openable",
                    "frame": {
                        "width": 92,
                        "height": 92,
                        "profile": {
                            "width": 8,
                            "offsetOutXY": 2,
                            "offsetInXY": 6,
                            "depth": 6
                        }
                    },
                    "glass": {
                        "width": 76,
                        "height": 76,
                        "type": "double"
                    }
                },
                {
                    "width": 100,
                    "height": 100,
                    "type": "openable",
                    "frame": {
                        "width": 92,
                        "height": 92,
                        "profile": {
                            "width": 8,
                            "offsetOutXY": 2,
                            "offsetInXY": 6,
                            "depth": 6
                        }
                    },
                    "glass": {
                        "width": 76,
                        "height": 76,
                        "type": "double"
                    }
                },
                {
                    "width": 100,
                    "height": 100,
                    "type": "openable",
                    "frame": {
                        "width": 92,
                        "height": 92,
                        "profile": {
                            "width": 8,
                            "offsetOutXY": 2,
                            "offsetInXY": 6,
                            "depth": 6
                        }
                    },
                    "glass": {
                        "width": 76,
                        "height": 76,
                        "type": "double"
                    }
                }
            ]
        }
    },

    {
        grid: {
            "width": 100,
            "height": 200,
            "count": {
                "x": 1,
                "y": 2
            },
            "factor": {
                "x": [1],
                "y": [1, 1]
            },
            "frame": {
                "width": 104,
                "height": 204,
                "material": "wood",
                "surface": "stained",
                "colour": "brown",
                "profile": {
                    "width": 8,
                    "offsetOutXY": 2,
                    "offsetInXY": 6,
                    "depth": 6
                }
            },
            "cells": [
                {
                    "width": 100,
                    "height": 100,
                    "type": "fixed",
                    "glass": {
                        "width": 88,
                        "height": 88,
                        "type": "double"
                    }
                },
                {
                    "width": 100,
                    "height": 100,
                    "type": "openable",
                    "frame": {
                        "width": 92,
                        "height": 92,
                        "profile": {
                            "width": 8,
                            "offsetOutXY": 2,
                            "offsetInXY": 6,
                            "depth": 6
                        }
                    },
                    "glass": {
                        "width": 76,
                        "height": 76,
                        "type": "double"
                    }
                }
            ]
        }
    },

    {
        grid: {
            "width": 50,
            "height": 100,
            "count": {
                "x": 1,
                "y": 1
            },
            "factor": {
                "x": [1],
                "y": [1]
            },
            "frame": {
                "width": 54,
                "height": 104,
                "material": "wood",
                "surface": "stained",
                "colour": "brown",
                "profile": {
                    "width": 8,
                    "offsetOutXY": 2,
                    "offsetInXY": 6,
                    "depth": 6
                }
            },
            "cells": [
                {
                    "width": 50,
                    "height": 100,
                    "type": "fixed",
                    "glass": {
                        "width": 38,
                        "height": 88,
                        "type": "double"
                    }
                }
            ]
        }
    }
]

Window.insertMany(seedWindows)
    .then(res => {
        console.log(res);
    })
    .catch(r => {
        console.log(e);
    })





