import { verifyToken } from "../middleware/jwt";
import UserSchema from "../models/Users";
const BillController = {
  getBill: async (req, res) => {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const valid = verifyToken(token);
    const user = await UserSchema.findOne({ _id:  valid.data.user._id });
    return res.status(200).json({
      status: 200,
      data: user.order,
    });
  },
};

export default BillController;
