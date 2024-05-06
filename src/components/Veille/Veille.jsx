import React from "react";

import Sondage from "./Sondage/Sondage";
import Tutoriels from "./Tutoriels/Tutoriels";
import Defis from "./Defis/Defis";
import AutresArticles from "./AutresArticles/AutresArticles";

const Veille = () => {
  return (
    <>
      <Sondage />

      <Tutoriels />
      <Defis />
      <AutresArticles />
    </>
  );
};

export default Veille;
