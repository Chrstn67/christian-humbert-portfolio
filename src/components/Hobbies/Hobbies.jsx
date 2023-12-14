import React from "react";
import "./Hobbies.scss";

const Hobbies = () => {
  const interests = [
    "Musique",
    "Randonnées",
    "Sciences",
    "Paléontologie",
    "Entomologie",
    "Mathématiques",
    "Lecture",
    "Football télévisé",
  ];

  return (
    <section className="hobbies-container">
      <h2>Mes Hobbies</h2>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </section>
  );
};

export default Hobbies;
