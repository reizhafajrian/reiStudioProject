import mongoose from "mongoose";

const Product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image_1: {
    type: String,
    required: true,
  },
  image_2: {
    type: String,
    required: true,
  },
  image_3: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  promo: {
    type: Number,
  },
  tag: {
    type: String,
    required: true,
  },
  review: {
    type: Array,
    required: false,
    default: [],
  },
  mekanik: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mekanik",
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

let ProductSchema = null;

try {
  ProductSchema = mongoose.model("Product", Product);
} catch (e) {
  ProductSchema = mongoose.model("Product");
}

export default ProductSchema;
