import { comparePassword, encrypt } from "../middleware/encrypt";
import { generateToken } from "../middleware/jwt";
import User from "../models/Users";
const { check } = require("express-validator");

const {
  validationHandler,
  validations,
} = require("../middleware/validationHandler");

const UserController = {
  login: async function (req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne(
      { email },
      { _id: 1, __v: 0, password: 0, order: 0 }
    );
    if (!user) {
      return res.status(401).json({
        status: 401,
        message: "Invalid email or password",
      });
    }
    console.log(user);
    const isMatch = await comparePassword(password, user.password);
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
  },
  register: async function (req, res, next) {
    await validationHandler(
      req,
      res,
      validations([
        check("name", "Full name is required!").not().isEmpty(),
        check("email", "Invalid email address").isEmail(),
        check("agreement", "Invalid").notEmpty().isBoolean(),
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
      ])
    );
    const { name, email, phone, password, agreement, alamat } = req.body;
    const passwordhash = await encrypt(password);
    const createUser = await User.create({
      name,
      email,
      phone,
      address: alamat,
      password: passwordhash,
      role: 0,
      privacy_policy: agreement,
    });
    const user = await User.findOne(createUser, { password: 0, __v: 0 });
    res.status(201).send({
      status: 201,
      message: "User created successfully",
      user,
    });
  },
};
module.exports = UserController;
