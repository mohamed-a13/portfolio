/*******************HEADER*******************/

import React from "react";
import Typed from "react-typed";
import "./Header.css";

const Header = () => {
  return (
    /* header-wrapper */
    <div className="header-wrapper">
      {/* main-info */}
      <div className="main-info">
        <h1>Mohamed Amine Nouhi</h1>
        <p>Développeur full stack junior</p>

        {/* typed */}
        <Typed
          className="typed"
          strings={[
            "HTML/CSS",
            "BOOTSTRAP",
            "JAVASCRIPT",
            "REACT",
            "REACT NATIVE",
            "NODEJS",
            "MONGODB",
            "PHP",
            "MYSQL",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

        {/* bouton : me contacter */}
        <div className="wrapperContact">
          <a href="#contact" className="btnContact">
            Me contacter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
