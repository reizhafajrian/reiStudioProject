import nc from "next-connect";
import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
import connectDB from "../../../backend/app";
import MekanikController from "../../../backend/controller/MekanikController.js";

export default connectDB(
  nc({ onError, onNoMatch })
    .post(MekanikController.create)
    .get(MekanikController.get)
    .put(MekanikController.edit)
    .delete(MekanikController.delete)
);
