import React, { useEffect, useRef, useState } from "react";
import { addResponseMessage, Widget } from "react-chat-widget";
import CustomerList from "../../components/CustomerList.js";
import "react-chat-widget/lib/styles.css";
import { Get, Post, Put } from "../../../../utils/api";
import { CometChat } from "@cometchat-pro/chat";
import ChatBox from "../../components/ChatBox.js";
export default function index() {
  const [state, setstate] = useState({
    customers: [],
    selectedCustomer: "",
    chat: [],
    chatIsLoading: false,
    customerIsLoading: true,
  });
  const fetchAuthToken = async (id) => {
    const data = await Put(`/chat?uid=${id}`);
    return data.authToken;
  };
  useEffect(() => {
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
    fetchAuthToken("1641354719504").then(
      (authToken) => {
        console.log("auth token fetched", authToken);
        CometChat.login(authToken).then((user) => {
          fetchUsers().then((result) => {
            console.log(result);
            console.log("users fetched", result);
            setstate({
              ...state,
              customers: result,
              customerIsLoading: false,
            });
          });

          CometChat.addMessageListener(
            "agent-listener",
            new CometChat.MessageListener({
              onTextMessageReceived: (message) => {
                if (state.selectedCustomer === message.sender.uid) {
                  const temp = state.chat;
                  temp.push(message);

                  setstate({
                    ...state,
                    chat: temp,
                  });
                } else {
                  // if new customer, push a new customer into customer state
                  const tempcustomer = state.customers;
                  let aRegisteredCustomer = tempcustomer.filter((customer) => {
                    return customer.uid === message.sender.uid;
                  });
                  if (!aRegisteredCustomer.length) {
                    const temp = state.customers;
                    temp.push(message.sender);

                    setstate({
                      ...state,
                      customers: temp,
                    });
                  }
                }
              },
            })
          );
        });
      },
      (error) => {
        console.log("Initialization failed with error:", error);
      }
    );
  }, []);
  const fetchPreviousMessages = (id) => {
    // const cookies = new Cookies();
    // const user = cookies.get("user");
    setstate({
      ...state,
      chat: [],
    });
    var messagesRequest = new CometChat.MessagesRequestBuilder()
      .setUID(state.selectedCustomer)
      .setLimit(10)
      .build();
    messagesRequest.fetchPrevious().then(
      (messages) => {
        // add messages to the widget chat bubbles
        // messages.forEach((message) => {
        //   const temp = state.chat;
        //   temp.push(message);
        //   setstate({
        //     ...state,
        //     chat: temp,
        //   });
        //   console.log(temp, "ini chat temp");
        // });
        setstate({
          ...state,
          chat: messages,
        });
      },
      (error) => {
        console.log("Message fetching failed with error:", error);
      }
    );
  };
  useEffect(() => {
    fetchPreviousMessages();
  }, [state.selectedCustomer]);
  const message = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAuthToken("1641354719504").then((result) => {
      CometChat.login(result).then((user) => {
        var textMessage = new CometChat.TextMessage(
          state.selectedCustomer,
          message.current.value,
          CometChat.RECEIVER_TYPE.USER
        );

        CometChat.sendMessage(textMessage).then(
          (message) => {
            const temp = state.chat;
            temp.push(message);
            setstate({
              ...state,
              chat: temp,
            });
          },
          (error) => {
            console.log("Message sending failed with error:", error);
          }
        );

        message.current.value = "";
      });
    });
  };
  const fetchUsers = async () => {
    const response = await Get(`/chat`);

    return response;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 h-100pr border rounded">
          <div className="row">
            <div
              className="col-lg-4 col-xs-12 bg-light"
              style={{ height: 658 }}
            >
              <div className="row p-3">
                <h2>Customer List</h2>
              </div>
              <div
                className="row ml-0 mr-0 h-75 bg-white border rounded"
                style={{ height: "100%", overflow: "auto" }}
              >
                {/* The CustomerList component */}
                <CustomerList
                  {...state}
                  selectedCustomer={setstate}
                  state={state}
                />
              </div>
            </div>
            <div
              className="col-lg-8 col-xs-12 bg-light"
              style={{ height: 658 }}
            >
              <div className="row p-3 bg-white">
                <h2>Who you gonna chat with?</h2>
              </div>
              <div
                className="row pt-5 bg-white"
                style={{ height: 530, overflow: "auto" }}
              >
                {/* The ChatBox component */}
                <ChatBox {...state} />
              </div>
              <div
                className="row bg-light"
                style={{ bottom: 0, width: "100%" }}
              >
                <form className="row m-0 p-0 w-100" onSubmit={handleSubmit}>
                  <div className="col-9 m-0 p-1">
                    <input
                      id="text"
                      className="mw-100 border rounded form-control"
                      type="text"
                      ref={message}
                      name="text"
                      placeholder="Type a message..."
                    />
                  </div>
                  <div className="col-3 m-0 p-1">
                    <button
                      className="btn btn-outline-secondary rounded border w-100"
                      title="Send"
                      style={{ paddingRight: 16 }}
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
