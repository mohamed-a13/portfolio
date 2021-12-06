/*******************PRESENTATION*******************/

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import about from "./about3.png";
import "./Presentation.css";

const AboutMe = () => {
  /* blibliothque AOS FOR SCROLL */
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    /* presentation container */
    <div id="presentation" className="container presentationContainer">
      <div className="row rowPresentation">
        <div
          data-aos="fade-up-right"
          className="colLeft col-sm-12 col-md-12 col-lg-6 col-xl-6"
        >
          <h2>Présentation</h2>

          <p>
            Je suis Mohamed Amine Nouhi, passionné par l'informatique et les
            nouvelles technologies, j'ai commencé à apprendre le développement
            de sites Web en autodictate en commencons par HTML et CSS. Suite à
            cette expérience, j’ai souhaité m’orienter plus profondément dans le
            monde de la tech et d'en faire mon métier. Pour approfondir mes
            connaissances, j'ai étudié les languages Javascript et PHP, puis
            j'ai décidé de me professionnaliser en suivant la formation du
            centre Studi et devenir développeur web afin de pouvoir aider les
            gens à donner vie à leurs projets. Le code est devenu aujourd'hui
            une passion.
          </p>
        </div>

        <div
          data-aos="fade-up-left"
          className="colRight col-sm-12 col-md-12 col-lg-6 col-xl-6"
        >
          <img
            className="img-fluid"
            src={about}
            alt="illustation de personnages constuisant un site"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
