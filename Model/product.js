const mongoose = require("mongoose");

const { Schema } = mongoose;

//Schema for ecommerce/products
const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

exports.Product = new mongoose.model("Product", productSchema);
