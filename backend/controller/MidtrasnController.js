const midtransClient = require("midtrans-client");
import { verifyToken } from "../middleware/jwt";
// Create Snap API instance
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-TqPfmnCEiR4EXMDnSP71mjaV",
});
export const MidtransController = {
  create: async (req, res, next) => {
    const { price, first_name, email, phone, last_name } = req.body;
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const verifyUser = verifyToken(token);
    console.log(token);

    if (verifyUser.status) {
      let parameter = {
        transaction_details: {
          order_id: Date.now(),
          gross_amount: price,
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          first_name: first_name,
          last_name: last_name,
          email: email,
          phone: phone,
        },
      };
      snap.createTransaction(parameter).then((transaction) => {
        return res.status(201).json({
          status: 200,
          transaction,
        });
      });
    }
  },
  getStatus: async (req, res, next) => {
    const { id } = req?.query;
    snap.transaction.status(id).then((response) => {
      return res.status(200).json({
        status: 200,
        response,
      });
    });
  },
};
