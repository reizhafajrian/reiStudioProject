import React, { useEffect } from "react";
import { Widget, addResponseMessage, isWidgetOpened } from "react-chat-widget";
import { CometChat } from "@cometchat-pro/chat";
import { Post, Put } from "../utils/api";
import Cookies from "universal-cookie";

export default function Chat() {
  const appSetting = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion("us")
    .build();
  CometChat.init("201059f99ad8e2a5", appSetting).then(
    () => {
      console.log("Initialization completed successfully");
      // You can now call login function.
    },
    (error) => {
      console.log("Initialization failed with error:", error);
      // Check the reason for error and take appropriate action.
    }
  );
  const createUser = async () => {
    const cookies = new Cookies();
    const user = cookies.get("user");

    const res = await Put(`/chat?uid=${user._id}`);

    return res;
  };
  const fetchPreviousMessages = () => {
    const cookies = new Cookies();
    const user = cookies.get("user");
    var messagesRequest = new CometChat.MessagesRequestBuilder()
      .setUID(user._id)
      .setLimit(10)
      .build();
    messagesRequest.fetchPrevious().then(
      (messages) => {
        console.log("Message list fetched:", messages);
        // add messages to the widget chat bubbles
        messages.forEach((message) => {
          if (message.receiver !== user._id) {
            addResponseMessage(message.text);
          } else {
            addUserMessage(message.text);
          }
        });
      },
      (error) => {
        console.log("Message fetching failed with error:", error);
      }
    );
  };
  useEffect(() => {
    // addResponseMessage("Welcome to our store!");
    const cookies = new Cookies();
    const user = cookies.get("user");
    if (typeof user !== "undefined") {
      addResponseMessage("Are you looking for anything in particular?");

      createUser().then((result) => {
        CometChat.login(result.authToken).then((user) => {
          createMessageListener();
          fetchPreviousMessages();
        });
      });
    }
  }, []);

  const createMessageListener = () => {
    new CometChat.addMessageListener(
      "agent-listener",
      new CometChat.MessageListener({
        onTextMessageReceived: (message) => {
          console.log("Incoming Message Log", { message });
          addResponseMessage(message.text);
        },
      })
    );
  };
  const handleNewUserMessage = (newMessage) => {
    // console.log("user,",CometChat.)
    var textMessage = new CometChat.TextMessage(
      "1641354719504",
      newMessage,
      CometChat.RECEIVER_TYPE.USER
    );

    createUser().then((result) => {
      CometChat.login(result.uid, "8447dd284ada88055a2e33a41151d8e84c558ba4")
        .then((user) => {
          CometChat.sendMessage(textMessage).then(
            (message) => {
              console.log("Message sent successfully:", message);
            },
            (error) => {
              console.log("Message sending failed with error:", error);
            }
          );
          // create listener
          CometChat.addMessageListener(
            "agent-listener",
            new CometChat.MessageListener({
              onTextMessageReceived: (message) => {
                console.log("Incoming Message Log", { message });
                addResponseMessage(message.text);
              },
            })
          );
        })
        .catch((error) => {
          console.log("Login failed with error:", error);
        });
    });

    //     .catch((error) => {
    //       console.log("Initialization failed with error:", error);
    //     });
    // } else {
    //   // we have uid, do send
    // new CometChat.sendMessage(textMessage).then(
    //   (message) => {
    //     console.log("Message sent successfully:", message);
    //   },
    //   (error) => {
    //     console.log("Message sending failed with error:", error);
    //   }
    // );
    // }
  };
  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="My E-commerce Live Chat"
        subtitle="Ready to help you"
        // launcher={handleToggle => getCustomLauncher(handleToggle)}
      />
    </div>
  );
}
