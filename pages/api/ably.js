import nc from "next-connect";
import { onError, onNoMatch } from "../../backend/middleware/errorHandler";

import connectDB from "../../backend/app";
import AblyController from "../../backend/controller/AblyController";
export default connectDB(nc({ onError, onNoMatch }).get(AblyController.getToken));
