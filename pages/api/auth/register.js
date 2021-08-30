import connectDB from "../../../backend/app.js";
import User from "../../../backend/models/users.js";
import { encrypt } from "../../../backend/middleware/encrypt";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    if (name && email && password) {
      try {
        const passwordhash = await encrypt(password);
        const user = await User.create({
          name,
          email,
          password: passwordhash,
        });
        return res.status(200).send(user);
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
