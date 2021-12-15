import nc from "next-connect";
import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
import UserController from "../../../backend/controller/UserController";
import connectDB from "../../../backend/app";
export default connectDB(nc({ onError, onNoMatch }).post(UserController.login));
