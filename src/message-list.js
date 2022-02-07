import React, { Component } from "react";
import MessageView from "./message-view";

class MessageList extends Component {
    state = {
        message: "Not an object!",
    };

    render() {
        return (
            <div className="container">
                <h1>List of messages</h1>
                <MessageView message={this.state.message} />
            </div>
        );
    }
}

export default MessageList;
