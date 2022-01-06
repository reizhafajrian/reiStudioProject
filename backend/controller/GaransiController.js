import UserSchema from "../models/Users";

const GaransiController = {
  create: async (req, res) => {
    const user = req.body.user;
    const findOne = await UserSchema.findOne({ _id: user._id });
    const result = findOne.order.filter(
      (res) => res.order_id === req.body.order_id
    );

    const findIndex = findOne.order.indexOf(result[0]);
    let dataorder = findOne.order;
    dataorder[findIndex].garansi = {
      status: true,
      reason: req.body.reason,
    };
    findOne.order = [];
    findOne.order = dataorder;
    findOne.save();
    return res.json({
      status: true,
      data: findOne,
    });
  },
  approve: async (req, res) => {
    const user = req.body;
    const data = await UserSchema.findOne({ _id: user._id });
    const result = data.order.filter(
      (res) => res.order_id === req.body.order.order_id
    );
    const findIndex = data.order.indexOf(result[0]);
    const temp = data.order;
    temp[findIndex].garansi.approve = true;
    data.order = [];
    data.order = temp;
    data.save();
    return res.json({
      status: true,
      data: data,
    });
  },
  reject: async (req, res) => {
    const user = req.body;
    const data = await UserSchema.findOne({ _id: user._id });
    const result = data.order.filter(
      (res) => res.order_id === req.body.order.order_id
    );
    const findIndex = data.order.indexOf(result[0]);
    const temp = data.order;
    temp[findIndex].garansi.approve = false;
    data.order = [];
    data.order = temp;
    data.save();
    return res.json({
      status: true,
      data: data,
    });
  },
};
export default GaransiController;
