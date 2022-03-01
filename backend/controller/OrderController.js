import { verifyToken } from "../middleware/jwt";
import UserSchema from "../models/Users";
import ProductSchema from "../models/product";
import MekanikSchema from "../models/mekanik";
const OderController = {
  createOrder: async function (req, res) {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const valid = verifyToken(token);
    const { data } = req.body;
    let example = [];
    const product = await ProductSchema.findOne({
      _id: data.data._id,
    }).populate({ path: "product_addtional", select: "_id stock" });

    const temp = product.stock - data.data.total;
    if (product.tag === "service") {
      const findMekanik = await MekanikSchema.findOne({
        _id: product.list_mekanik[0],
      });

      if (temp > 0) {
        for (let i = 0; i < product.product.length; i++) {
          const value = product.product[i].value;
          const stock = product.product_addtional[i].stock;
          console.log(value, stock, "ini value");
          if (value <= stock) {
            await ProductSchema.findOneAndUpdate(
              { _id: product.product_addtional[i]._id },
              { stock: stock - value }
            );
          }
        }
        product.stock = temp;
        product.list_mekanik.shift();
        product.save();
        if (token && valid.status) {
          const user = await UserSchema.findOne({ _id: valid.data.user._id });
          user.order.push(data);
          await user.save();
          example = user.order.filter(
            (v, i, a) => a.findIndex((t) => t.order_id === v.order_id) === i
          );

          findMekanik.order.push(data.order_id);
          user.order = example;
          await findMekanik.save();
          await user.save();
          return res.status(200).json({
            code: 200,
            status: true,
            data: user,
          });
        }
      }
    }

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
      message: product,
    });
  },
};
export default OderController;
