// styles
import "./ChatWindow.css";

import Avatar from "./Avatar";

import { useAuthContext } from "../hooks/useAuthContext";

import React from "react";

export default function ChatWindow() {
  const { user } = useAuthContext();

  return (
    <div className="chat-window">
      <div className="title-bar">
        <div className="photo">
          <Avatar src={user.photoURL} className="avatar" />
        </div>
        <div className="name">{user.displayName}</div>
      </div>
      <div className="chat-box">Chat Box</div>
      <div className="chat-input">
        <input type="text" placeholder="Your message" />
        <button className="btn send-button">Send</button>
      </div>
    </div>
  );
}
