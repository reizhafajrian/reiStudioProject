import nc from "next-connect";
import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
import connectDB from "../../../backend/app";
import TransaksiController from "../../../backend/controller/TransaksiController";

export default connectDB(
  nc({ onError, onNoMatch })
    // .post(ProductController.createProduct)
    .get(TransaksiController.getTransaksi)
    .put(TransaksiController.editTransaksi)
    // .delete(ProductController.deleteData)
);
