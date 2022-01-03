import nc from "next-connect";
import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
import connectDB from "../../../backend/app";
import ProductController from "../../../backend/controller/ProductController";

export default connectDB(
  nc({ onError, onNoMatch })
    .post(ProductController.createProduct)
    .get(ProductController.getData)
    .put(ProductController.editData)
    .delete(ProductController.deleteData)
);
