import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./ChatScreen.css";

const ChatScreen = () => {
  const [seed, setSeed] = useState();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image: `https://avatars.dicebear.com/api/female/${seed}.svg`,
      message: "Whats up 🧡 ?",
    },
    {
      name: "Ellen",
      image: `https://avatars.dicebear.com/api/female/${seed}.svg`,
      message: "How is it going ?",
    },
    {
      message: "I am Rocking.",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatscreen">
      <div className="chatscreen__container">
        <p className="chatscreen__timestamp">
          You Matched With Ellen on 20/04/2021
        </p>
        {messages.map((message) =>
          message.name ? (
            <div className="chatscreen__message">
              <Avatar src={message.image} />
              <p className="chatscreen___text">{message.message}</p>
            </div>
          ) : (
            <div className="chatscreen__message">
              <p className="chatscreen___textuser">{message.message}</p>
            </div>
          )
        )}
        <form action="" className="chatscreen__input">
          <input
            type="text"
            className="chatscreen__inputField"
            placeholder="Type a message..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="chatscreen__inputButton"
            type="submit"
            onClick={handleSend}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
