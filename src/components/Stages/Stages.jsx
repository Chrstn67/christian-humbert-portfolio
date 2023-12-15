import React, { useState } from "react";

import "./Stages.scss";

const otherExperience = [
  {
    institution: "Université de Strasbourg",
    title: "Département du Numérique",

    period: "3 au 7 octobre 2022",
    skills: [
      "Réparation du matériel informatique",
      "Sécurité service réseau",
      "Initiation aux lois RGPD",
      "Visite d'un data-center",
      "Mise en place de la fibre optique",
      "Configuration Réseaux",
      "Visite d'un studio de tournage",
      "Observation d'un tournage réel",
      "Découverte du développement web (PHP)",
      "Production de contenu éducatif en format vidéo",
      "Découverte du métier d'architecte urbaniste informatique",
      "Démonstrations de l'utilisation de Symfony",
    ],
  },
];

const Stages = () => {
  const [selectedStage, setSelectedStage] = useState(null);

  const handleStageClick = (index) => {
    setSelectedStage((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="stages-container">
      <div className="stage-title">
        <h2>Stage</h2>
      </div>
      <section className="stage-list">
        {otherExperience.map((experience, index) => (
          <div
            key={index}
            className={`experience-item ${
              selectedStage === index ? "selected" : ""
            }`}
            onClick={() => handleStageClick(index)}
          >
            <div className="period">{experience.period}</div>
            <div className="content">
              <h3>{experience.title}</h3>
              <p>{experience.institution}</p>
              {selectedStage === index && (
                <>
                  <h4>Compétences acquises :</h4>
                  <ul>
                    {experience.skills.map((skill, skillIndex) => (
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

export default Stages;
