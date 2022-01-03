import { test } from "gray-matter";
import ProductSchema from "../models/product";

const ProductController = {
  createProduct: async (req, res) => {
    const { data } = req.body;
    const tets = {
      name: "etet",
      image_1: "etet",
      image_2: "etet",
      image_3: "etet",
      desc: "test",
      price: 2,
      promo: 20,
      stock: 1,
      review: [],
      tag: "oli",
    };
    const product = await ProductSchema.create(data);
    return res.status(200).json({
      status: 200,
      data: product,
    });
  },
  getData: async (req, res) => {
    const { search } = req.query;
    if (typeof search === "undefined") {
      const product = await ProductSchema.find();
      return res.status(200).json({
        status: 200,
        data: product,
      });
    }
    const data = await ProductSchema.find({ tag: search });
    return res.status(200).json({
      status: 200,
      data,
    });
  },
  editData: async (req, res) => {
    const { data } = req.body;
    const product = await ProductSchema.findByIdAndUpdate(data.id, data);
    return res.status(200).json({
      status: 200,
      data: product,
    });
  },
  deleteData: async (req, res) => {
    const { id } = req.body;
    const product = await ProductSchema.findByIdAndDelete(id);
    return res.status(200).json({
      status: 200,
      data: product,
    });
  },
  findById: async (req, res) => {
    const { id } = req.query;

    const product = await ProductSchema.findById(id);
    return res.status(200).json({
      status: 200,
      data: product,
    });
  },
};
export default ProductController;
