import ProductSchema from "../models/product";

const SearchController = {
  find: async (req, res) => {
    const { search } = req.query;
    if (typeof search === "undefined") {
      const product = await ProductSchema.find();
      return res.status(200).json({
        status: 200,
        data: product,
      });
    }
    const find = search.charAt(0).toUpperCase() + search.slice(1);
    let data = await ProductSchema.find({
      name: { $regex: find, $options: "i" },
    });
    if (data.length < 1) {
      data = await ProductSchema.find({ tag: { $regex: search } });
    }
    return res.status(200).json({
      status: 200,
      data,
    });
    z;
  },
};
export default SearchController;
