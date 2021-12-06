/*******************LANGUAGES*******************/

import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import "./stylesCompetences/Languages.css";

class Languages extends Component {
  // données du portfolio via portfolioData.js
  state = {
    languages: [
      { id: 1, value: "HTML/CSS", xp: 70 },
      { id: 2, value: "Javascript", xp: 60 },
      { id: 3, value: "NodeJs", xp: 50 },
      { id: 4, value: "REACT", xp: 60 },
    ],
    frameworks: [
      { id: 1, value: "Bootstrap", xp: 70 },
      { id: 2, value: "React", xp: 50 },
      { id: 3, value: "ExpressJs", xp: 50 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      /* competences container */
      <div className="container containerLanguagesFramework">
        <div className="languagesFramework">
          <ProgressBar
            languages={languages}
            className="languagesDisplay"
            title="langages"
          />

          <ProgressBar
            languages={frameworks}
            title="framworks/bibliothèques"
            className="frameworksDisplay"
          />
        </div>
      </div>
    );
  }
}

export default Languages;
