const mongoose = require("mongoose");

const { Schema } = mongoose;

//Schema for ecommerce/products
const productSchema = new Schema({
  title: { type: String, required: true }, //unique: true
  description: String,
  price: {
    type: Number,
    min: [0, "Wrong Min Price Entered"],
    required: [true, "Please Enter Price"],
  },
  discountPercentage: {
    type: Number,
    min: [0, "Wrong Discount percentage"],
    max: [50, "Wrong max Discount precentage"],
  },
  rating: {
    type: Number,
    min: [0, "Wrong min rating"],
    max: [5, "Wrong max rating"],
    default: 0,
  },
  brand: { type: String, required: [true, "Please Enter your brand"] },
  category: { type: String, required: [true, "Please Enter your category"] },
  thumbnail: { type: String, required: [true, "Please Enter your Thumbnail"] },
  images: [String],
});

exports.Product = new mongoose.model("Product", productSchema);
