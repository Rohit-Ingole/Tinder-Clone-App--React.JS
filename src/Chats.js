import React from "react";
import "./Chats.css";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <div className="chats__container">
        <Chat
          name="Sarah"
          message="How are You 🙂?"
          timestamp="35 minutes ago"
        />
        <Chat
          name="Ellen"
          message="what's up ❤️ ?"
          timestamp="55 minutes ago"
        />
        <Chat name="Sandra" message="Ola!" timestamp="3 days ago" />
        <Chat
          name="Natasha"
          message="Oops there is he is..."
          timestamp="1 week ago"
        />
      </div>
    </div>
  );
};

export default Chats;
