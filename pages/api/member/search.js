import nc from "next-connect";
import connectDB from "../../../backend/app";
import SearchController from "../../../backend/controller/SearchController";
import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
export default connectDB(
  nc({ onError, onNoMatch })
    .get(SearchController.find)
);
