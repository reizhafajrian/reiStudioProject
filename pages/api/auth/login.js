import connectDB from "../../../backend/app.js";
import User from "../../../backend/models/users.js";
import { encrypt } from "../../../backend/middleware/encrypt";
import { compare } from "bcrypt";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (email && password) {
      try {
      
        const user = await User.findOne({
          email,
        });
        const passwordhash = await compare(password, user.password);
        return res.status(200).send(passwordhash);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else {
    res.status(405).send("method_not_allowed");
  }
};
export default connectDB(handler);
