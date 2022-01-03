import { verifyToken } from "../middleware/jwt";
import UserSchema from "../models/Users";
const TransaksiController = {
  getTransaksi: async (req, res) => {
    // const { authorization } = req.headers;
    // const token = authorization.split(" ")[1];
    // const valid = verifyToken(token);
    const user = await UserSchema.find();

    return res.status(200).json({
      status: 200,
      data: user,
    });
  },
  editTransaksi: async (req, res) => {
    const { data } = req.body;
    let user = await UserSchema.findOne({
      order: { $elemMatch: { order_id: data.order_id } },
    });

    const test = user.order.filter((v, i, a) => v.order_id === data.order_id);
    const index = user.order.indexOf(test[0]);
    const dataOrder = user.order;
    dataOrder[index] = data;
    user.order = [];
    user.order = dataOrder;
    await user.save();

    return res.status(200).json({
      status: 200,
      data: user,
    });
  },
};

export default TransaksiController;
