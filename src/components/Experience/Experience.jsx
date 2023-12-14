import React, { useState } from "react";
import "./Experience.scss";

const professionalExperience = [
  {
    title: "Développeur Web",
    position: "Développeur Web",
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

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleExperienceClick = (index) => {
    setSelectedExperience((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="experience-timeline">
      <div className="experience-title">
        <h2>Expérience Professionnelle</h2>
      </div>
      <section className="experience-list">
        {professionalExperience.map((exp, index) => (
          <div
            key={index}
            className={`experience-item ${
              selectedExperience === index ? "selected" : ""
            }`}
            onClick={() => handleExperienceClick(index)}
          >
            <div className="duration">{exp.duration}</div>
            <div className="content">
              <h3>{exp.title}</h3>
              <p>{exp.position}</p>
              {selectedExperience === index && (
                <>
                  <h4>Compétences :</h4>
                  <ul>
                    {exp.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Experience;
