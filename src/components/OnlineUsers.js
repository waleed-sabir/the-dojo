import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import Avatar from "./Avatar";
import ChatWindow from "./ChatWindow";
import { useState } from "react";

// styles
import "./OnlineUsers.css";

export default function OnlineUsers() {
  const [showChatWindow, setShowChatWindow] = useState(false);
  const { isPending, error, documents } = useCollection("users");
  const { user } = useAuthContext();
  console.log(user.uid);
  const clickHandler = (e) => {
    console.log(e);
    // if (user.displayName !== e.target.closest(".user-list-item").textContent) {
    //   setShowChatWindow(true);
    // console.log(e.target.closest(".user-list-item").textContent);
    // }
  };

  return (
    <div className="user-list">
      <h2>All Users</h2>
      {isPending && <div>Loading users...</div>}
      {error && <div>{error}</div>}
      {documents &&
        documents.map((user) => (
          <div
            key={user.id}
            onClick={() => clickHandler(user.displayName)}
            className="user-list-item"
          >
            {user.online && <span className="online-user"></span>}
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
      {showChatWindow && <ChatWindow />}
    </div>
  );
}
