/*******************PAGE ACCUEIL*******************/

import React from "react";
import Particles from "../components/Particles/Particles";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Presentation from "../components/Presentation/Presentation";
import Competences from "../components/Competences/Competences";
import ProjetsListe from "../components/Projets/ProjetsListe";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";

const Accueil = () => {
  return (
    <>
      <Particles />
      <Navbar />
      <Header />
      <Presentation />
      <Competences />
      <ProjetsListe />
      <Form />
      <Footer />
    </>
  );
};

export default Accueil;
