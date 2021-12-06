/*******************PAGE ERROR*******************/

import React from "react";
import { NavLink } from "react-router-dom";
import "./ErrorMsg.css";

const ErrorMsg = () => {
  return (
    <div className="container errorMsgContainer">
      <h2>Page Error</h2>
      <p>
        Cette page n'existe pas,{" "}
        <NavLink exact to="/">
          cliquez ici
        </NavLink>{" "}
        pour revenir au site!
      </p>
    </div>
  );
};

export default ErrorMsg;
