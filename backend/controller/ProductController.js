import { test } from "gray-matter";
import ProductSchema from "../models/product";

const ProductController = {
  createProduct: async (req, res) => {
    const { data } = req.body;
    console.log(data);

    const product = await ProductSchema.create({
      name: data.name,
      image_1: data.image_1,
      image_2: data.image_2,
      image_3: data.image_3,
      desc: data.desc,
      price: data.price,
      promo: data.promo,
      stock: data.stock,
      tag: data.tag,
      product: data.product,
      product_addtional: data.product_addtional,
    });
    return res.status(200).json({
      status: 200,
      data: product,
    });
  },
  getData: async (req, res) => {
    const { search, ex } = req.query;
    if (typeof search === "undefined" && typeof ex === "undefined") {
      const product = await ProductSchema.find();
      return res.status(200).json({
        status: 200,
        data: product,
      });
    }
    if (search === "service") {
      const product = await ProductSchema.find({ tag: "service" }).populate({
        path: "list_mekanik",
        select: "_id name",
      });
      console.log(product, "example");

      return res.status(200).json({
        status: 200,
        data: product,
      });
    }
    if (typeof ex === "string") {
      const product = await ProductSchema.find({ tag: { $ne: "service" } });
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
    console.log(data);
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
  findProduct: async (req, res) => {
    const { id } = req.query;

    const product = await ProductSchema.find({
      $text: { $search: id },
    });
    return res.status(200).json({
      status: 200,
      data: product,
    });
  },
};
export default ProductController;
