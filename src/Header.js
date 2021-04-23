import React from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import { Person, Forum, ArrowBackIos } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function Header({ backButton }) {
  const history = useHistory();

  return (
    <div className="header">
      <IconButton>
        {backButton ? (
          <ArrowBackIos
            fontSize="large"
            className="header__icon"
            onClick={() => history.replace(backButton)}
          />
        ) : (
          <Person fontSize="large" className="header__icon" />
        )}
      </IconButton>
      <Link to="/">
        <img
          src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-768x432.png"
          alt="Tinder Logo"
          className="header__logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <Forum fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
