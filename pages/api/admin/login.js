import nc from "next-connect";
import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
import AdminController from "../../../backend/controller/AdminController";
import connectDB from "../../../backend/app";

export default connectDB(
  nc({ onError, onNoMatch }).post(AdminController.login)
);
