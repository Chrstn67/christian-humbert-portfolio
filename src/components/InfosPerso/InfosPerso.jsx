import React from "react";
import "./InfosPerso.scss";
import {
  FaEnvelope,
  FaLinkedin,
  FaDiscord,
  FaWhatsapp,
  FaSlack,
  FaInfo,
} from "react-icons/fa";

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
  discord: "discord.gg/CEn3pBs6mR",
  slack:
    "https://join.slack.com/t/mycliumgroupe/shared_invite/zt-26dxwb0qa-gfLxOej6e0~4X6PJOUshkA",
  whatsapp: "https://whatsapp.com/channel/0029VaZwOjRIXnlifbrBE83N",
  biodev:
    "https://www.linkedin.com/pulse/lhistoire-de-mon-premier-projet-web-et-mes-d%2525C3%2525A9buts-dans-humbert-yqxwe%3FtrackingId=AEJW5zIYSSie0BWbTIsBUA%253D%253D/?trackingId=AEJW5zIYSSie0BWbTIsBUA%3D%3D",
  cv: "./assets/CV-Christian_HUMBERT.pdf",
  email: "chrstn.hmbrt67@outlook.com",
  languageSkills: [
    { language: "Français", level: "Langue maternelle" },
    { language: "Langue des Signes Française", level: "Notions" },
    { language: "Langage Parlé-Complété", level: "Avancé" },
    { language: "Lecture Labio-faciale", level: "Maitrisée" },
    { language: "Anglais", level: "A1-A2" },
    { language: "Espagnol", level: "B2-C1" },
    { language: "Russe", level: "A1" },
  ],
  otherSkills: ["Permis B", "RQTH illimitée"],
};

const InfosPerso = () => {
  return (
    <section>
      <div className="card-1">
        <img
          className="photo-profil"
          src="./assets/photo-profil.png"
          alt="Photo de profil, Christian HUMBERT"
        />

        <div className="card-1-content">
          <p>{`${personalInfo.age} ans`}</p>
          <p>
            <FaEnvelope className="logo-network" />
            <a
              href={`mailto:${personalInfo.email}`}
              title="Lien Mail"
            >{`${personalInfo.email}`}</a>
          </p>
          <p>
            <FaLinkedin className="logo-network" />
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <FaDiscord className="logo-network" />
            <a
              href={personalInfo.discord}
              target="_blank"
              rel="noopener noreferrer"
              title="Lien Discord"
            >
              Discord
            </a>
          </p>
          <p>
            <FaSlack className="logo-network" />
            <a
              href={personalInfo.slack}
              target="_blank"
              rel="noopener noreferrer"
              title="Lien Slack"
            >
              Slack
            </a>
          </p>
          <p>
            <FaWhatsapp className="logo-network" />
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              title="Lien Chaîne WhatsApp"
            >
              Chaîne WhatsApp
            </a>
          </p>
          <p>
            <FaInfo className="logo-network" />
            <a
              href={personalInfo.cv}
              target="_blank"
              rel="noopener noreferrer"
              title="Lien CV PDF"
            >
              CV
            </a>
          </p>
          <p>
            <a
              href={personalInfo.biodev}
              target="_blank"
              rel="noopener noreferrer"
              title="Lien Article LinkedIn"
            >
              Comment j'ai commencé le dev
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
