/*******************FOOTER*******************/

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-brands-svg-icons";
import * as Icon from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerContainer">
      {/* Template Bootstrap pris sur le siteMDBootstrap      */}

      <footer className="text-center text-lg-start">
        <div className="container text-center text-md-start">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
              <h4 className="text-uppercase">Developpeur FullStack</h4>

              <div className="me-5 d-none d-lg-block">
                <p>
                  <span>Réseaux sociaux:</span>
                  <a
                    className="icon"
                    href="https://www.linkedin.com/in/mohamed-nouhi-2792a8226/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon className="ml-3" icon={Icons.faLinkedin} />
                  </a>{" "}
                  <a
                    className="icon"
                    href="https://github.com/mohamed-a13"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon className="ml-3" icon={Icons.faGithub} />
                  </a>
                </p>
                <p>
                  <span>Code Source Portfolio:</span>{" "}
                  <a className="icon" href="github">
                    <FontAwesomeIcon className="ml-3" icon={Icons.faGithub} />
                  </a>
                </p>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 ">
              <h4 className="text-uppercase ">Contact</h4>

              <p>
                <FontAwesomeIcon className="icon" icon={Icon.faHome} /> Rés les
                Ormeaux 2, Bât le Verdon 1, 13127 Vitrolles
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 ">
              <h4 className="text-uppercase ">Contact</h4>

              <p>
                <FontAwesomeIcon className="icon" icon={Icon.faEnvelope} />{" "}
                aminenouhi013127@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          © 2021 Copyright:
          <NavLink to="/" className="text-reset">
            Mohamed-Amine-Nouhi.com
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
