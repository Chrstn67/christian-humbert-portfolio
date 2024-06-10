import { useState } from "react";
import "./Experience.scss";

const Experience = () => {
  const professionalExperience = [
    {
      title: "Développeur Web",
      // position: "Développeur Web",
      duration: "DISPONIBLE",
      skills: ["HTML", "CSS/SCSS", "JS", "React/ViteJS", "Symfony"],
    },
    {
      title: "Académie de Strasbourg",
      position: "Accompagnant d'Élèves en Situation de Handicap",
      duration: "2017 - 2022",
      skills: [
        "Enseignement (Tous niveaux + ULIS Collège)",
        "Vulgarisation (mathématiques)",
        "Travail d'équipe",
      ],
    },
  ];

  return (
    <section className="experience-container">
      <h2>Parcours Pro</h2>
      {professionalExperience.map((experience, index) => (
        <div className="experience-item" key={index}>
          <div className="experience-header">
            <h2>{experience.title}</h2>
            <h3>{experience.position}</h3>
            <span>{experience.duration}</span>
          </div>
          <div className="experience-skills">
            <ul>
              {experience.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
