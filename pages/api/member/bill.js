import nc from "next-connect";
import connectDB from "../../../backend/app";
import BillController from "../../../backend/controller/BillController";

import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
export default connectDB(
  nc({ onError, onNoMatch }).get(BillController.getBill)
);
