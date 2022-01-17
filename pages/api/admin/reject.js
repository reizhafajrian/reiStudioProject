import nc from "next-connect";
import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
import connectDB from "../../../backend/app";
import GaransiController from "../../../backend/controller/GaransiController";

export default connectDB(
  nc({ onError, onNoMatch }).post(GaransiController.reject)
);
