import React, { useEffect, useState } from "react";
import { useChannel } from "./AbblyReactEffect";

export default function AblyChatComponent() {
  let inputBox = null;
  let messageEnd = null;
  const [messageText, setMessageText] = useState("");
  const [receivedMessages, setMessages] = useState([]);
  const messageTextIsEmpty = messageText.trim().length === 0;
  const [channel, ably] = useChannel("chat-demo", (message) => {
      
    // Here we're computing the state that'll be drawn into the message history
    // We do that by slicing the last 199 messages from the receivedMessages buffer
    const history = receivedMessages;
    setMessages([...history, message]);

    // Then finally, we take the message history, and combine it with the new message
    // This means we'll always have up to 199 message + 1 new message, stored using the
    // setMessages react useState hook
  });
  channel.attach(function (err) {
    channel.history({ untilAttach: true }, function (err, resultPage) {
      var lastMessage = resultPage;
      console.log(lastMessage, "ini last message");
    });
  });
  const sendChatMessage = (messageText) => {
    channel.attach(function (err) {
      channel.publish({ name: "chat-message", data: messageText });
    });

    setMessageText("");
    inputBox.focus();
  };
  const handleFormSubmission = (event) => {
    event.preventDefault();
    sendChatMessage(messageText);
  };
  const handleKeyPress = (event) => {
    if (event.charCode !== 13 || messageTextIsEmpty) {
      return;
    }

    sendChatMessage(messageText);
    event.preventDefault();
  };
  const messages = receivedMessages.map((message, index) => {
    const author = message.connectionId === ably.connection.id ? "me" : "other";

    return (
      <span key={index} data-author={author}>
        {message.data}
      </span>
    );
  });
  useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: "smooth" });
  });

  return (
    <div
      style={{
        backgroundColor: "red",
      }}
    >
      <div className="d-flex flex-col">
        <div className="d-flex flex-column justify-content-between">
          {messages}
        </div>
        <div
          ref={(element) => {
            messageEnd = element;
          }}
        ></div>{" "}
        // empty element to control scroll to bottom
      </div>
      <form onSubmit={handleFormSubmission}>
        <textarea
          ref={(element) => {
            inputBox = element;
          }}
          value={messageText}
          placeholder="Type a message..."
          onChange={(e) => setMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
        ></textarea>
        <button type="submit" disabled={messageTextIsEmpty}>
          Send
        </button>
      </form>
    </div>
  );
}
