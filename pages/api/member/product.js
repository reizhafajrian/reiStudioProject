import nc from "next-connect";
import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
import connectDB from "../../../backend/app";
import ProductController from "../../../backend/controller/ProductController";

export default connectDB(
  nc({ onError, onNoMatch }).get(ProductController.findById)
);
