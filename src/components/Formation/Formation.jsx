import React, { useState } from "react";
import "./Formation.scss";

const education = [
  {
    institution: "O'Clock",
    title: "Développeur Web & Web Mobile",
    period: "Nov 2022 - Mai 2023",
    achievements: "Admis TP – DWWM",
    skills: [
      "Formation intensive en développement web",
      "Projets sur la base des langages HTML, CSS, JS, PHP, SQL",
      "Spécialisation FrontEnd avec ReactJS/Redux",
    ],
  },
  {
    institution: "Lycée Louis Marchal, Molsheim",
    title: "Baccalauréat STI2D",
    period: "2014-2016",
    achievements: "Admis, Mention BIEN",
    skills: [
      "Conception de Cahiers des Charges",
      "Réalisation de projets techniques",
      "Travail en équipe",
      "Modélisation 3D",
      "Impression 3D",
      "Découpe Laser",
      "Dessin industriel",
    ],
  },
];

const Formation = () => {
  const [selectedEducation, setSelectedEducation] = useState(null);

  const handleEducationClick = (index) => {
    setSelectedEducation((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="formation-timeline">
      <div className="formation-title">
        <h2>Formation</h2>
      </div>
      <section className="formation-list">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`formation-item ${
              selectedEducation === index ? "selected" : ""
            }`}
            onClick={() => handleEducationClick(index)}
          >
            <div className="period">{edu.period}</div>
            <div className="content">
              <h3>{edu.title}</h3>
              <p>{edu.institution}</p>
              {selectedEducation === index && (
                <>
                  <p>
                    <span className="achievements">{edu.achievements}</span>
                  </p>
                  {edu.skills.length > 0 && (
                    <>
                      <h4>Compétences:</h4>
                      <ul>
                        {edu.skills.map((skill, skillIndex) => (
                          <li key={skillIndex}>{skill}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Formation;
