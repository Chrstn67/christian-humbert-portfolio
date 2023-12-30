import React from "react";
import InfosPerso from "../InfosPerso/InfosPerso";
import Experience from "../Experience/Experience";
import Formation from "../Formation/Formation";
import Stages from "../Stages/Stages";
import Hobbies from "../Hobbies/Hobbies";
import Portfolio from "../Portfolio/Portfolio";
import Veille from "../Veille/Veille";

const HomePage = () => {
  return (
    <>
      <InfosPerso />
      <Hobbies />
      <Experience />
      <Formation />
      <Stages />
      <Portfolio />
      <Veille />
    </>
  );
};

export default HomePage;
