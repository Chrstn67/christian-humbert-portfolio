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

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const handleSkillClick = (skills) => {
    setIsDialogOpen(true);
    setSelectedEducation(skills);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedEducation(null);
  };

  return (
    <section className="experience-container">
      <h2>Formation</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <h3>
              {edu.title}, {edu.period}
            </h3>
            <p>{edu.institution}</p>
            <p>{edu.achievements}</p>
            <button onClick={() => handleSkillClick(edu.skills)}>
              Voir les compétences
            </button>
          </li>
        ))}
      </ul>
      {isDialogOpen && (
        <dialog open className="dialog" onClick={handleCloseDialog}>
          <div
            className="dialog-container"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Compétences</h2>
            <ul>
              {selectedEducation.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <button onClick={handleCloseDialog}>Fermer</button>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default Formation;
