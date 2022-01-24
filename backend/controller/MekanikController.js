import { comparePassword, encrypt } from "../middleware/encrypt";
import MekanikSchema from "../models/mekanik";
import { generateToken, verifyToken } from "../middleware/jwt";
const MekanikController = {
  create: async (req, res) => {
    try {
      const data = await MekanikSchema.create(req.body);
      return res.json({
        status: 200,
        data,
      });
    } catch (error) {
      throw error;
    }
  },
  get: async (req, res) => {
    try {
      const data = await MekanikSchema.find({});
      return res.json({
        status: 200,
        data,
      });
    } catch (error) {
      throw error;
    }
  },
  edit: async (req, res) => {
    try {
      const data = await MekanikSchema.findOneAndUpdate(
        {
          _id: req.body.data.id,
        },
        req.body.data,
        { new: true }
      );
      return res.json({
        status: 200,
        data,
      });
    } catch (error) {
      throw error;
    }
  },
  delete: async (req, res) => {
    try {
      const data = await MekanikSchema.findOneAndDelete({
        _id: req.body.id,
      });
      return res.json({
        status: 200,
        data,
      });
    } catch (error) {
      throw error;
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const passwordEncrypt = await encrypt(password);
      const user = await MekanikSchema.findOne(
        {
          email: email,
        },
        { password: 0, _id: 1, __v: 0 }
      );
      console.log(req.body);

      if (!user) {
        return res.status(401).json({
          status: 401,
          message: "Invalid email or password",
        });
      }
      const isMatch = await comparePassword(passwordEncrypt, user.password);
      console.log(isMatch);
      if (isMatch) {
        const token = await generateToken(user);
        return res.status(200).json({
          status: 200,
          isLogin: true,
          user: user,
          token: token,
        });
      }
      return res.json({
        status: 401,
        message: "Invalid email or password",
      });
    } catch (error) {
      throw error;
    }
  },
};
export default MekanikController;
