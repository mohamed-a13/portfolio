/*******************COMPETENCES*******************/

import React from "react";
import about from "./about2.png";
import Languages from "./Languages";
import "./stylesCompetences/Competences.css";

const competences = () => {
  return (
    <div id="competences" className="container competencesContainer">
      <div className="row rowCompetences">
        <div
          data-aos="fade-up-right"
          className="colLeft col-sm-12 col-md-12 col-lg-6 col-xl-6 order-sm-2 order-md-2 order-lg-1 order-xl-1"
        >
          <img className="img-fluid" src={about} alt="illustatration" />
        </div>

        <div
          data-aos="fade-up-left"
          className="colRight col-sm-12 col-md-12 col-lg-6 col-xl-6 order-sm-1 order-md-1 order-lg-2 order-xl-2"
        >
          <h2>Compétences</h2>

          {/* languages */}
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default competences;
