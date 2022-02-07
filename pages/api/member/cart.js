import nc from "next-connect";
import connectDB from "../../../backend/app";
import AddToCartController from "../../../backend/controller/AddToCartController";

import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
export default connectDB(
  nc({ onError, onNoMatch })
    .post(AddToCartController.create)
    .get(AddToCartController.get)
    .delete(AddToCartController.delete)
);
