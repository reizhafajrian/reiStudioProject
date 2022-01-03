import nc from "next-connect";
import connectDB from "../../../backend/app";
import ReviewController from "../../../backend/controller/ReviewController";

import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
export default connectDB(nc({ onError, onNoMatch }).put(ReviewController.create));
