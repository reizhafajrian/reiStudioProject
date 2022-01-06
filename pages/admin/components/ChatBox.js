import React from "react";

class ChatBox extends React.Component {
  render() {
    const { chat, chatIsLoading } = this.props;
    if (chatIsLoading) {
      return (
        <div className="col-xl-12 my-auto text-center">
          {/* <MDSpinner size="72" /> */}
        </div>
      );
    } else {
      // simple mapping of array from props
      return (
        <div className="col-xl-12">
          {chat.map((chat) => (
            <div key={chat.id} className="message">
              <div
                className={`${
                  chat.receiver === "1641354719504" ? "balon2" : "balon1"
                } p-3 m-1`}
              >
                {chat.text}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}
export default ChatBox;
