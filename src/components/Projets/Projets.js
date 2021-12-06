/*******************PROJETS*******************/

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icon from "@fortawesome/free-solid-svg-icons";
import "./stylesProjets/Projets.css";

class Project extends Component {
  render() {
    let { name, languages, source, info, picture } = this.props.item;

    return (
      <>
        <div className="card m-2" style={{ width: "20rem", height: "28rem" }}>
          <div className="langue">
            {languages.map((language) => {
              return (
                <span key={language} className={language}>
                  {" "}
                  {language} /{" "}
                </span>
              );
            })}
          </div>

          <img
            className="card-img-top"
            src={picture}
            alt="projet"
            style={{ width: "100%", height: "60%", cursor: "pointer" }}
          />

          <div className="card-body">
            <div>
              <h6 className="card-title">{name}</h6>

              <button
                className="modalA"
                type="button"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <FontAwesomeIcon icon={Icon.faPlusCircle} />
              </button>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <a
                    className="lienSite"
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source}
                  </a>
                </h5>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">{info}</div>

              <div className="modal-footer">
                <button className="fermer" type="button" data-dismiss="modal">
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Project;
