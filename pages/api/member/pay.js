import nc from "next-connect";
import connectDB from "../../../backend/app";
import { MidtransController } from "../../../backend/controller/MidtrasnController";
import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
export default connectDB(
  nc({ onError, onNoMatch })
    .post(MidtransController.create)
    .get(MidtransController.getStatus)
);
