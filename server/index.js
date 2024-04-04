const express = require("express");
const app = express();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const mongoose = require("mongoose");
const AppError = require("./AppError");

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


app.use(express.json());

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}


// window routes

app.get("/windows", wrapAsync(async (req, res) => {
    const windows = await Window.find({}).select("grid");
    res.send(windows)
}))

app.post("/windows", wrapAsync(async (req, res) => {
    const newWindow = new Window(req.body)
    await newWindow.save();
    console.log(JSON.stringify(newWindow, null, 2));
    res.send(`Saved! ${newWindow._id}`)
}))

app.get("/windows/:id", wrapAsync(async (req, res) => {
    console.log(req.params.id)
    const window = await Window.findById(req.params.id).select("grid");
    if (!window) {
        throw new AppError("Window Not Found", 404);
    }
    res.send(window)
}))

app.put("/windows/:id", wrapAsync(async (req, res) => {
    const window = await Window.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true });
    console.log(window)
    res.send(`Edited! ${req.params.id}`)
}))

app.delete("/windows/:id", async (req, res) => {
    const window = await Window.findByIdAndDelete(req.params.id);
    res.send(`Deleted! ${req.params.id}`)
})


// image routes

app.post('/windows/:id/images', upload.single('image'), wrapAsync(async (req, res) => {
    const window = await Window.findById(req.params.id);
    console.log(req.file)
    const { filename, path, mimetype, size } = req.file;
    const imageData = req.file.buffer;
    window.image = {
        name: filename,
        data: imageData,
        mimetype: mimetype,
        size: size
    };
    console.log(window);
    await window.save();
    res.send(`Image added to ${req.params.id}!`)
}));

app.get('/windows/:id/images', wrapAsync(async (req, res) => {
    const window = await Window.findById(req.params.id);
    if (!window.image) {
        throw new AppError("Image Not Found", 404);
    }
    res.set('Content-Type', window.image.mimetype);
    console.log(window.image);
    res.send(window.image.data);
}));


// DS routes

app.get("/glassMeasurements", wrapAsync(async (req, res) => {
    const glassMeasurements = await Window
        .find({ "grid.cells.glass": { $exists: true } })
        .select("grid.cells.glass.width grid.cells.glass.height");
    res.send(glassMeasurements);
}))


// deleteWhenReady

app.delete("/deleteAll", wrapAsync(async (req, res) => {
    await Window.deleteMany({});
    console.log('All documents deleted successfully');
    res.send("Deleted!")
}))


// Error handling

const handleValidationErr = err => {
    let errors = Object.values(err.errors).map(el => el.message);
    let properties = Object.values(err.errors).map(el => el.path);
    return new AppError(`Validation of the following properties failed: \n${properties.join("\n")} \n\nMessages: \n${errors.join("\n")}`, 400)
}

app.use((err, req, res, next) => {
    console.dir(err.name);
    if (err.name === "ValidationError") err = handleValidationErr(err)
    next(err);
})

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("Listening on Port 3000");
})







// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Baukreisel:0bufUFCoXzyNfxtk@reuserecord.lenyaxi.mongodb.net/?retryWrites=true&w=majority&appName=ReuseRecord";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
