import React from "react";

import Sondage from "./Sondage/Sondage";
import Tutoriels from "./Tutoriels/Tutoriels";

import AutresArticles from "./AutresArticles/AutresArticles";

const Veille = () => {
  return (
    <>
      <Sondage />

      <Tutoriels />

      <AutresArticles />
    </>
  );
};

export default Veille;
