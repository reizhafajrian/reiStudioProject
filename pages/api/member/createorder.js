import nc from "next-connect";
import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
import connectDB from "../../../backend/app";
import OderController from "../../../backend/controller/OrderController";
export default connectDB(
  nc({ onError, onNoMatch }).post(OderController.createOrder)
);
