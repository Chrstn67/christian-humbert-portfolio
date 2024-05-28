import { useState } from "react";
import "./Experience.scss";

const Experience = () => {
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

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillClick = (skills) => {
    setSelectedSkills(skills);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <section className="experience-container">
      <h2>Expériences Professionnelles</h2>
      <ul>
        {professionalExperience.map((experience, index) => (
          <li key={index}>
            <h3>{experience.title}</h3>
            <p>{experience.position}</p>
            <p>{experience.duration}</p>
            <button onClick={() => handleSkillClick(experience.skills)}>
              Voir les compétences
            </button>
          </li>
        ))}
      </ul>

      <dialog open={isDialogOpen} onClick={handleCloseDialog}>
        <div className="dialog-container" onClick={(e) => e.stopPropagation()}>
          <h2>Compétences</h2>
          <ul>
            {selectedSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <button onClick={handleCloseDialog}>Fermer</button>
        </div>
      </dialog>
    </section>
  );
};

export default Experience;
