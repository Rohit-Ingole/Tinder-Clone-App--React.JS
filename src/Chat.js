import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Chat.css";

const Chat = ({ name, message, timestamp }) => {
  const [seed, setSeed] = useState();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar
          className="chat__image"
          src={`https://avatars.dicebear.com/api/female/${seed}.svg`}
          alt={name}
        />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};

export default Chat;
