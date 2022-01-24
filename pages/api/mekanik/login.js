import nc from "next-connect";
import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
import connectDB from "../../../backend/app";
import MekanikController from "../../../backend/controller/MekanikController";

export default connectDB(
  nc({ onError, onNoMatch }).post(MekanikController.login)
);
