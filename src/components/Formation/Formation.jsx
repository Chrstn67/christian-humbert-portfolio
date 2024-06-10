import { useState } from "react";
import "./Formation.scss";

const Formation = () => {
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
      institution: "Université de Strasbourg",
      title: "Département du Numérique",
      achievements: "Stage",
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

  return (
    <section className="formation-container">
      <h2>Formation</h2>
      {education.map((edu, index) => (
        <div className="formation-item" key={index}>
          <div className="formation-header">
            <h2>{edu.title}</h2>
            <h3>{edu.institution}</h3>
            <span>{edu.period}</span>
            <span className="achievements">{edu.achievements}</span>
          </div>
          <div className="formation-skills">
            <ul>
              {edu.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Formation;
