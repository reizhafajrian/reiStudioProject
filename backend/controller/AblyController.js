import Ably from "ably/promises";
const AblyController = {
  getToken: async (req, res) => {
    const client = new Ably.Realtime(process.env.ABLY_API_KEY);
    const tokenRequestData = await client.auth.createTokenRequest({
      clientId: "ably-nodejs-sdk-test",
    });
    res.status(200).json(tokenRequestData);
  },
  joinChat: async (req, res) => {
      
  }
};
export default AblyController;
