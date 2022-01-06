import nc from "next-connect";
import { onError, onNoMatch } from "../../backend/middleware/errorHandler";

import connectDB from "../../backend/app";
import ChatController from "../../backend/controller/ChatController";

export default connectDB(
  nc({ onError, onNoMatch })
    .post(ChatController.create)
    .put(ChatController.auth)
    .get(ChatController.getUser)
);
