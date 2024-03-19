const express = require("express");
const app = express();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
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


app.use(express.json());


app.get("/windows", async (req, res) => {
    const windows = await Window.find({}).select("grid");
    res.send(windows)
})

app.get('/images/:id', async (req, res) => {
    const window = await Window.findById(req.params.id);
    if (!window.image) {
        return res.status(404).json({ error: 'Image not found' });
    }
    res.set('Content-Type', window.image.mimetype);
    console.log(window.image);
    res.send(window.image.data);
});


app.get("/glassMeasurements", async (req, res) => {
    const glassMeasurements = await Window
        .find({ "grid.cells.glass": { $exists: true } })
        .select("grid.cells.glass.width cells.glass.height");
    res.send(glassMeasurements);
})

app.post("/windows", async (req, res) => {
    console.log(req.body);
    const window = new Window(req.body);
    console.log(window)
    await window.save();
    res.send("Saved!")
})

app.post('/upload', upload.single('image'), async (req, res) => {
    console.log(req.file)
    const { filename, path, mimetype, size } = req.file;
    const imageData = req.file.buffer;
    const window = new Window({
        image: {
            name: filename,
            data: imageData,
            mimetype: mimetype,
            size: size
        }
    });
    console.log(window)
    await window.save();
    res.send("Uploaded!")
});

app.post('/upload/:id', upload.single('image'), async (req, res) => {
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
    res.send("Image added!")
});


app.delete("/deleteAll", async (req, res) => {
    await Window.deleteMany({});
    console.log('All documents deleted successfully');
    res.send("Deleted!")
})

app.delete("/windows/:id", async (req, res) => {
    const window = await Window.findByIdAndDelete(req.params.id);
    res.send(`Deleted! ${req.params.id}`)
})




// app.post("/grids", async (req, res) => {
//     console.log(req.body);
//     const { count, cells } = req.body;
//     const gird = new Grid(count);
//     const cellsArray = [];
//     for (let cell of cells) {
//         const newCell = new Cell({ cell });
//         cellsArray.push(newCell);
//     };
//     cellsArray.grid = grid;
//     grid.cells = cellsArray;
//     console.log(grid);
// })




// app.get("/farms", async (req, res) => {
//     const farms = await Farm.find({});
//     res.render("farms/index", { farms })
// });

// app.get("/farms/new", (req, res) => {
//     res.render("farms/new")
// });

// app.get("/farms/:id", async (req, res) => {
//     const farm = await Farm.findById(req.params.id).populate("products");
//     console.log(farm)
//     res.render("farms/show", { farm })
// })

// app.delete("/farms/:id", async (req, res) => {
//     const farm = await Farm.findByIdAndDelete(req.params.id);
//     res.redirect("/farms");
// })

// app.post("/farms", async (req, res) => {
//     const farm = new Farm(req.body);
//     await farm.save();
//     res.redirect("/farms");
// })

// app.get("/farms/:id/products/new", async (req, res) => {
//     const { id } = req.params;
//     const farm = await Farm.findById(id);
//     res.render("products/new", { categories, farm })
// })

// app.post("/farms/:id/products", async (req, res) => {
//     const { id } = req.params;
//     const farm = await Farm.findById(id);
//     const { name, price, category } = req.body;
//     const product = new Product({ name, price, category });
//     farm.products.push(product);
//     product.farm = farm;
//     await farm.save();
//     await product.save();
//     res.redirect(`/farms/${farm._id}`)
// })





// // Product routes

// const categories = ["fruit", "vegetable", "dairy", "fungi"];

// app.get("/products", async (req, res) => {
//     const { category } = req.query;
//     if (category) {
//         const products = await Product.find({ category });
//         res.render("products/index", { products, category });
//     } else {
//         const products = await Product.find({});
//         res.render("products/index", { products, category: "All" });
//     }
// })

// app.get("/products/new", (req, res) => {
//     res.render("products/new", { categories });
// })

// app.post("/products", async (req, res) => {
//     const newProduct = new Product(req.body)
//     await newProduct.save();
//     console.log(newProduct);
//     res.redirect(`/products/${newProduct._id}`);
// })

// app.get("/products/:id", async (req, res) => {
//     const { id } = req.params;
//     const product = await Product.findById(id).populate("farm", "name");
//     console.log(product)
//     res.render("products/show", { product });
//     // const products = await Product.find({});
//     // res.render("products/index", { products });
// })

// app.get("/products/:id/edit", async (req, res) => {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.render("products/edit", { product, categories });
// })

// app.put("/products/:id", async (req, res) => {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
//     res.redirect(`/products/${product._id}`)
// })

// app.delete("/products/:id", async (req, res) => {
//     const { id } = req.params;
//     const deletedProduct = await Product.findByIdAndDelete(id);
//     res.redirect("/products");
// })

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
