import nc from "next-connect";
import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
import UserController from "../../../backend/controller/UserController";

export default nc({ onError, onNoMatch }).post(UserController.register);
