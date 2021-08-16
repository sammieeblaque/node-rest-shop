const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    productImage: { type: String, required: true }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;