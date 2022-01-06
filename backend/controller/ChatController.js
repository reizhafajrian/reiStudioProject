import axios from "axios";
// import { CometChat } from "@cometchat-pro/chat";

const url = "https://api-us.cometchat.io/v2";
const appID = "201059f99ad8e2a5";
const region = "us";
const headers = {
  "Content-Type": "application/json",
  appid: appID,
  apikey: "d5b773b90a9bab7947acfb3bfc89ecbc8de476d0",
};
const requestAuthToken = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/users/${uid}/auth_tokens`, null, {
        headers,
      })
      .then((response) => {
        console.log("New Auth Token:", response.data);
        resolve(response.data.data);
      })
      .catch((error) => reject(error));
  });
};
const ChatController = {
  //   create: async (req, res) => {
  //     const appID = "201059f99ad8e2a5";
  //     const region = "us";
  //     const appSetting = new CometChat.AppSettingsBuilder()
  //       .subscribePresenceForAllUsers()
  //       .setRegion(region)
  //       .build();
  //     CometChat.init(appID, appSetting).then(
  //       () => {
  //         console.log("Initialization completed successfully");
  //         // You can now call login function.
  //       },
  //       (error) => {
  //         console.log("Initialization failed with error:", error);
  //         // Check the reason for error and take appropriate action.
  //       }
  //     );
  //   },
  create: async function (req, res, next) {
    const data = {
      // you can use your own logic to generate random UID and name
      // only uid has to be unique
      uid: req.body.user._id,
      name: req.body.user.name,
    };
    console.log(req.body)
    axios
      .post(`${url}/users`, JSON.stringify(data), {
        headers,
      })
      .then((response) => {
        // user is created, fetch auth token
        requestAuthToken(response.data.data.uid)
          .then((token) => {
            console.log("Success:" + JSON.stringify(token));

            res.json(token);
          })
          .catch((error) => console.error("Error:", error));
      })
      .catch((error) => console.error("Error:", error));
  },
  auth: async function (req, res, next) {
    const uid = req.query.uid;
    requestAuthToken(uid)
      .then((token) => {
        console.log("Success:" + JSON.stringify(token));
        res.json(token);
      })
      .catch((error) => console.error("Error:", error));
  },
  getUser: async function (req, res, next) {
    axios
      .get(`${url}/users`, {
        headers,
      })
      .then((response) => {
        const { data } = response.data;
        const filterAgentData = data.filter((data) => {
          return data.uid !== "1641354719504";
        });
        res.json(filterAgentData);
      })
      .catch((error) => console.error("Error:", error));
  },
};
export default ChatController;
