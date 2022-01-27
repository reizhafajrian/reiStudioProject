import nc from "next-connect";
import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
import FindMekanikController from "../../../backend/controller/FindMekanikController";

export default nc({ onError, onNoMatch }).get(FindMekanikController.find);
