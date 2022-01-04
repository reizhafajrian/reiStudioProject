import { verifyToken } from "../middleware/jwt";
import UserSchema from "../models/Users";
import ProductSchema from "../models/product";
const OderController = {
  createOrder: async function (req, res) {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const valid = verifyToken(token);
    const { data } = req.body;
    let example = [];
    const product = await ProductSchema.findOne({ _id: data.data._id });
    const temp = data.data.total - product.stock;

    if (temp >= 0) {
      product.stock = temp;
      product.save();
      if (token && valid.status) {
        const user = await UserSchema.findOne({ _id: valid.data.user._id });
        user.order.push(data);
        await user.save();
        example = user.order.filter(
          (v, i, a) => a.findIndex((t) => t.order_id === v.order_id) === i
        );
        user.order = example;
        console.log(example);
        await user.save();
        return res.status(200).json({
          code: 200,
          status: true,
          data: user,
        });
      }
    }
    return res.status(200).json({
      code: 200,
      status: false,
      message: "Stock is not enough",
    });
  },
};
export default OderController;
