import UserSchema from "../models/Users";

const AddToCartController = {
  create: async (req, res) => {
    try {
      const { data, user_id } = req.body;
      //   console.log(data, user_id);
      let dataArray = [];
      const user = await UserSchema.findOne({ _id: user_id });

      const temp = user.cart.findIndex((a) => a._id === data._id);
      if (temp > -1) {
        dataArray = user.cart.splice(temp, 1); // 2nd parameter means remove one item only
        user.cart[temp] = data;
      } else {
        user.cart.push(data);
      }

      await user.save();
      return res.status(200).json({
        code: 200,
        status: true,
        data: user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        code: 500,
        status: false,
        data: error,
      });
    }
  },
  get: async (req, res) => {
    try {
      const { user_id } = req.query;
      const user = await UserSchema.findOne({ _id: user_id });
      return res.status(200).json({
        code: 200,
        status: true,
        data: user.cart,
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        status: false,
        data: error,
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { user_id } = req.query;
      const user = await UserSchema.findOneAndUpdate(
        { _id: user_id },
        { cart: [] }
      );

      return res.status(200).json({
        code: 200,
        status: true,
        data: user.cart,
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        status: false,
        data: error,
      });
    }
  },
};

export default AddToCartController;
