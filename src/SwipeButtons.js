import { Favorite, Replay, StarRate, Close, FlashOn } from "@material-ui/icons";
import React from "react";
import "./SwipeButtons.css";
import { IconButton } from "@material-ui/core";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton>
        <Replay fontSize="large" className="swipeButtons__repeat" />
      </IconButton>
      <IconButton>
        <Close fontSize="large" className="swipeButtons__close" />
      </IconButton>
      <IconButton>
        <StarRate fontSize="large" className="swipeButtons__starrate" />
      </IconButton>
      <IconButton>
        <Favorite fontSize="large" className="swipeButtons__favourite" />
      </IconButton>
      <IconButton>
        <FlashOn fontSize="large" className="swipeButtons__flashon" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
