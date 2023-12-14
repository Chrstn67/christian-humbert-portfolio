import React from "react";
import "./InfosPerso.scss";

const calculateAge = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

const personalInfo = {
  name: "Christian HUMBERT",
  age: calculateAge("1998-03-11"),
  linkedin: "https://www.linkedin.com/in/christian-humbert-developpeur-web/",
  cv: "./assets/CV-Christian_HUMBERT.pdf",
  email: "chrstn.hmbrt67@outlook.com",
  languageSkills: [
    { language: "Français", level: "Langue maternelle" },
    { language: "Langue des Signes Française", level: "Notions" },
    { language: "Langage Parlé-Complété", level: "Avancé" },
    { language: "Lecture Labio-faciale", level: "Maitrisée" },
    { language: "Anglais", level: "A1-A2" },
    { language: "Espagnol", level: "B2-C1" },
  ],
  otherSkills: ["Permis B", "RQTH illimitée"],
};

const InfosPerso = () => {
  return (
    <section>
      <div className="card-1">
        <img
          className="photo-profil"
          src="./assets/images/Photo-profil.png"
          alt="Photo de profil, Christian HUMBERT"
        />

        <div className="card-1-content">
          <p>{`${personalInfo.age} ans`}</p>
          <p>
            <img
              className="logo-network"
              src="./assets/images/Logos/mail-logo.png"
              alt="Logo Mail"
            />
            <a
              href={`mailto:${personalInfo.email}`}
            >{`${personalInfo.email}`}</a>
          </p>
          <p>
            <img
              className="logo-network"
              src="./assets/images/Logos/linkedin-logo.png"
              alt="Logo LinkedIn"
            />
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <img
              className="logo-network"
              src="./assets/images/Logos/cv-logo.png"
              alt="Logo CV"
            />
            <a href={personalInfo.cv} target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </p>
        </div>
      </div>
      <section className="container-skills">
        <section className="languages">
          <h3>Compétences linguistiques :</h3>
          <ul>
            {personalInfo.languageSkills.map((skill, index) => (
              <li key={index}>{`${skill.language}: ${skill.level}`}</li>
            ))}
          </ul>
        </section>
        <section className="othersSkills">
          <h3>Autres :</h3>
          <ul>
            {personalInfo.otherSkills.map((skill, index) => (
              <li key={index}>
                {typeof skill === "object"
                  ? `${skill.language}: ${skill.level}`
                  : skill}
              </li>
            ))}
          </ul>{" "}
        </section>

        <section className="objectif">
          <h3>Objectif :</h3>
          <p>
            Curieux de nature, j&#39;ai pu acquérir une expérience dans
            l&#39;enseignement. Un peu &#39;touche-à-tout&#39;, je
            m&#39;intéresse au développement web depuis 2021. Je souhaite
            acquérir de nouvelles compétences, connaitre l&#39;évolution de la
            technologie informatique et partager mes acquis à d&#39;autres.
          </p>
        </section>
      </section>
    </section>
  );
};

export default InfosPerso;
