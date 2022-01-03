import React, { useEffect } from "react";
import AblyChatComponent from "../components/AblyChatComponent";
import Pusher from "pusher-js";
export default function index() {
  const Test = () => {
    Pusher.logToConsole = true;

    var pusher = new Pusher("9a545ea440abdf782956", {
      cluster: "ap1",
    });

    var channel = pusher.subscribe("my-channel");
    channel.bind("my-event", function (data) {
      alert(JSON.stringify(data));
    });
  };
  useEffect(() => {
    Test();
    // return () => {
    //   cleanup
    // }
  }, []);
  return (
    <>
      <head>
        <title>Pusher Test</title>
        <script src="https://js.pusher.com/7.0/pusher.min.js"></script>
      </head>
      <body>
        <h1>Pusher Test</h1>
        <p>
          Try publishing an event to channel <code>my-channel</code>
          with event name <code>my-event</code>.
        </p>
      </body>
    </>
  );
}
