/*******************PROJETSLISTE*******************/

import React, { Component } from "react";
import { portfolioData } from "./portfolioData";
import Project from "./Projets";
import "./stylesProjets/ProjetsListe.css";

class ProjectList extends Component {
  // Data des projets
  state = {
    projects: portfolioData,
    radios: [
      { id: 1, value: "HTML-CSS-Bootstrap" },
      { id: 2, value: "Javascript" },
      { id: 3, value: "React/NodeJs" },
      { id: 4, value: "React" },
      { id: 5, value: "React/Redux" },
      { id: 6, value: "Wordpress" },
    ],
    selectedRadio: "Javascript",
  };

  // Bouton selection
  handleRadio = (e) => {
    let radio = e.target.value;
    this.setState({ selectedRadio: radio });
  };

  render() {
    let { projects, radios, selectedRadio } = this.state;

    return (
      <div id="portfolio" className="container-fluid listContainer">
        <h2>Portfolio</h2>

        {/* radioDisplay */}
        <ul className="radioDisplay">
          {radios.map((radio, index) => {
            return (
              <li key={index}>
                <input
                  type="radio"
                  name={radio.value}
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                />
                {/* <span>{radio.value}</span> */}
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>

        {/* projects */}
        <div className="projects">
          {projects
            .filter((item) => item.languages.includes(selectedRadio))
            .map((item, index) => {
              return <Project key={index} item={item} />;
            })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
