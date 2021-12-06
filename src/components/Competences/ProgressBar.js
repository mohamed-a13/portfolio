/*******************PORGRESSBAR*******************/

import React from "react";
import "./stylesCompetences/ProgressBar.css";

const ProgressBar = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>

      <div>
        {props.languages.map((item) => {
          let xpYears = 100;
          let progressBar = (item.xp * 100) / xpYears + "%";

          return (
            <div key={item.id} className="languagesList">
              <li>{item.value}</li>

              <div className="progressBar" style={{ width: progressBar }}>
                <span className="percent">{item.xp} %</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
