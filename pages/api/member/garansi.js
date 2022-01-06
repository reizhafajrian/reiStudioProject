import nc from "next-connect";
import connectDB from "../../../backend/app";
import GaransiController from "../../../backend/controller/GaransiController";

import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
export default connectDB(
  nc({ onError, onNoMatch }).post(GaransiController.create)
);
