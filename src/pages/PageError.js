import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";

const PageError = () => {
  return (
    <>
      <Navbar />
      <ErrorMsg />
      <Footer />
    </>
  );
};

export default PageError;
