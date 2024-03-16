const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Grid = require("./models/grid");
const Cell = require("./models/cell");
const Frame = require("./models/frame");
const Glas = require("./models/glas");
const Profile = require("./models/profile");
const grid = require("./models/grid");


mongoose.connect('mongodb://127.0.0.1:27017/reuseRecord')
    .then(() => {
        console.log("Mongo Connection Open!")
    })
    .catch(err => {
        console.log(" Oh No Mongo Connection Error!!")
        console.log(err)
    })


app.use(express.json());


app.get("/grids", async (req, res) => {
    const grids = await Grid.find({});
    res.send(grids)
})

app.post("/grids", async (req, res) => {
    console.log(req.body);
    const grid = new Grid(req.body);
    console.log(grid)
    // await grid.save();
})







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

