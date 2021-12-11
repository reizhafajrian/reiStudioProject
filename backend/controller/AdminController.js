import connectDB from "../app";
import { comparePassword, encrypt } from "../middleware/encrypt";
import { generateToken, verifyToken } from "../middleware/jwt";
import Admin from "../models/Admin";
const { check } = require("express-validator");

const {
  validationHandler,
  validations,
} = require("../middleware/validationHandler");

const AdminController = {
  login: async function (req, res, next) {

    const { email, password } = req.body;

    const user = await Admin.findOne(
      { email },
      { password: 0, _id: 1, __v: 0 }
    );
    if (!user) {
      return res.status(401).json({
        status: 401,
        message: "Invalid email or password",
      });
    }
    const isMatch = await comparePassword(password, user.password);
    if (user.role === 1) {
      if (isMatch) {
        const token = await generateToken(user);
        return res.status(200).json({
          status: 200,
          user: user,
          token: token,
        });
      } else {
        res.status(400).json({
          status: 400,
          message: "Invalid email or password",
        });
      }
    } else {
      res.status(200).json({
        status: 200,
        message: "You are not an admin",
      });
    }
  },
  register: async function (req, res, next) {
    await validationHandler(
      req,
      res,
      validations([
        check("name", "Full name is required!").not().isEmpty(),
        check("email", "Invalid email address").isEmail(),
        check("valid", "Invalid").notEmpty().isBoolean(),
        check("phone", "Phone number is required!")
          .notEmpty()
          .isMobilePhone()
          .withMessage("Must provide a valid phone number"),
        check("password", "Password at least 8 characters")
          .isLength({
            min: 8,
          })
          .custom((value, { req }) => {
            if (value !== req.body.confirmPassword) {
              throw new Error("The password is not the same as the new one");
            } else {
              return value;
            }
          }),
        check("Authorization", "Invalid token").notEmpty(),
      ])
    );
    const { authorization } = req.headers;
    const { name, email, phone, password, valid } = req.body;
    const token = authorization.split(" ")[1];
    const result = await verifyToken(token);
    if (result.user.role !== 1) {
      return res.status(401).json({
        status: 401,
        message: "You are not an admin",
      });
    }
    const passwordhash = await encrypt(password);
    const createUser = await Admin.create({
      name,
      email,
      phone,
      password: passwordhash,
      role: 1,
      privacy_policy: valid,
    });
    const user = await Admin.findOne(createUser, { password: 0, __v: 0 });
    res.status(201).send({
      status: 201,
      message: "Admin created successfully",
      user,
    });
  },
};
module.exports = AdminController;
