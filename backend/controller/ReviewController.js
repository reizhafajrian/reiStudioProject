import ProductSchema from "../models/product";

const ReviewController = {
  create: async (req, res) => {
    const { data } = req.body;
    const { id } = req.query;
  
    const reviewData = await ProductSchema.findOne({ _id: String(id) });
    reviewData.review.push({
    ...data,
    });
    reviewData.save();
    return res.status(201).json({
      status: 201,
      data: reviewData,
    });
  },
};
export default ReviewController;
