import nc from "next-connect";
import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
import AdminController from "../../../backend/controller/AdminController";

export default nc({ onError, onNoMatch }).post(AdminController.login);
