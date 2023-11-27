import React from "react";
import Sondage from "../Sondage/Sondage";
import "./HomePage.scss";

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
    "Français : Langue maternelle",
    "Langue des Signes Française : Notions",
    "Langage Parlé-Complété : Niveau Avancé",
  ],
  otherSkills: [
    "Lecture Labio-faciale: Maitrisée",
    "Anglais : Niveau A1-A2",
    "Espagnol : Niveau B2-C1",
    "Permis B",
    "RQTH illimitée",
  ],
};

const professionalExperience = [
  {
    title: "Développeur Web",
    position: "Développeur Web",
    duration: "DISPONIBLE",
    skills: ["HTML", "CSS/SCSS", "JS", "React", "ViteJS", "Symfony"],
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

const education = [
  {
    institution: "O'Clock",
    title: "Titre Professionnel: Développeur Web & Web Mobile",
    period: "Nov 2022 - Mai 2023",
    achievements: "TP CCP Frontend validé - Août 2023",
    skills: [
      "Formation intensive en développement web",
      "Projets pratiques sur la base des langages HTML, CSS, JS, PHP, SQL",
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

const otherExperience = [
  {
    title: "Département du Numérique - Université de Strasbourg",
    position: "Stage de découverte",
    period: "3 au 7 octobre 2022",
    skills: [
      "Réparation du matériel informatique",
      "Sécurité service réseau",
      "Initiation aux lois RGPD",
      "Découverte des infrastructures, visite d'un data-center",
      "Mise en place de la fibre optique",
      "Configuration Réseaux",
      "Visite d'un studio de tournage, observation d'un tournage d'une interview",
      "Découverte du développement web (PHP)",
      "Production de contenu éducatif en format vidéo",
      "Découverte du métier d'architecte urbaniste informatique",
      "Démonstrations de l'utilisation de Symfony",
    ],
  },
];

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

const projects = [
  {
    title: "WriterTalent",
    imageUrl: "assets/images/logo_WriterTalent.png",
    description:
      "Sur ce site, nous offrons l'opportunité de lire le travail des écrivains en herbe qui aiment partager le fruit de leur imagination avec une communauté dans le but d'obtenir des commentaires constructifs. Il sera accessible au public prochainement.",
    technologies: ["React", "SASS", "Symfony"],
    videoLink:
      "https://www.linkedin.com/posts/christian-humbert-developpeur-web_et-voil%C3%A0-la-pr%C3%A9sentation-de-notre-projet-activity-7060258632805834752-DYZI?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "PaleoData",
    imageUrl: "assets/images/PaleoData.png",
    description:
      "Amateurs de paléontologie, ce site est pour vous ! Venez faire un safari préhistorique, un voyage dans le temps. Partez à la découverte d'animaux dont vous ne soupçonniez peut-être pas l'existence ! N'hésitez pas à venir collaborer !",
    technologies: ["ViteJS", "SASS"],
    siteLink: "https://chrstn67.github.io/PaleoData/#/",
  },
  {
    title: "Def'Web",
    imageUrl: "assets/images/DefWeb.jpeg",
    description:
      "Je vous propose ici de faire vos recherches sur le service que rendent les différents langages de programmation, les frameworks existants et des notions de vocabulaire. Tout est rangé dans l'ordre alphabétique, mais vous avez la possibilité de rechercher par mots-clés.",
    technologies: ["HTML", "CSS", "JS"],
    siteLink: "https://chrstn67.github.io/Def-Web/",
    status: "REFONTE EN COURS",
  },
  {
    title: "Mail Search Job Manager",
    imageUrl: "assets/images/envoie-lettres.jpeg",
    description:
      "Cela vous dit de laisser l'indémodable papier-stylo de côté ?  Dans ce projet, je vous propose de vous aider dans votre recherche d'emploi. L'utilisation est extrêmement simple: Il vous suffit simplement de renseigner à qui et quand vous avez envoyé votre lettre de candidature ! Vous pourrez ensuite spécifier si vous avez reçu une réponse ou non. Bonne recherche à vous !",
    technologies: ["React", "SCSS", "GeoAPI"],
    siteLink: "https://chrstn67.github.io/Mail-Search-Job-Manager/",
  },
  {
    title: "Traducteur Français-Alsacien",
    imageUrl: "assets/images/alsace.jpeg",
    description:
      "Il s'agit là d'un de mes tous premiers projets alliant les nouvelles connaissances acquises en début de formation DWWM. Amis Alsaciens, Bienvenus !!",
    technologies: ["HTML", "CSS", "JS"],
    siteLink: "https://chrstn67.github.io/Traducteur-Francais-Alsacien/",
  },
  {
    title: "VoiceRanger",
    imageUrl: "assets/images/voice.jpeg",
    description:
      "Petit projet sympa qui aurait pu se faire en Back, mais que j'ai volontairement fait en Front... Voici des cartes d'indentité de chanteuses et chanteurs du monde entier. L'objectif principal est de renseigner la tessiture vocale et l'ambitus de chaque artiste.",
    technologies: ["HTML", "CSS", "JS"],
    siteLink: "https://chrstn67.github.io/Voice_Ranger/",
  },
];

const HomePage = () => {
  return (
    <div>
      <main>
        <section id="informations-personnelles" className="card">
          <h2 className="card-title">Informations personnelles</h2>
          <div className="card-content">
            <p>{personalInfo.name}</p>
            <p>{personalInfo.age} ans</p>
            <p>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mon profil LinkedIn
              </a>
            </p>
            <p>
              <a
                href={personalInfo.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mon CV
              </a>
            </p>
            <p>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </p>

            {personalInfo.languageSkills.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
            {personalInfo.otherSkills.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </section>

        <section id="experience-professionnelle" className="card">
          <h2 className="card-title">Expérience professionnelle</h2>
          <div className="card-content">
            {professionalExperience.map((experience, index) => (
              <div key={index}>
                <h3>{experience.title}</h3>
                <p>{experience.position}</p>
                <p>{experience.duration}</p>
                <h4>Compétences :</h4>
                <ul>
                  {experience.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="formation" className="card">
          <h2 className="card-title">Formation</h2>
          <div className="card-content">
            {education.map((edu, index) => (
              <div key={index}>
                <h3>{edu.institution}</h3>
                <p>{edu.title}</p>
                <p>{edu.period}</p>
                {edu.achievements && (
                  <p
                    style={{
                      background: "#68ff00",
                      padding: "0.2em",
                      borderRadius: "0.5em",
                      textAlign: "center",
                    }}
                  >
                    {edu.achievements}
                  </p>
                )}
                <h4>Parcours à {edu.institution}</h4>
                <ul>
                  {edu.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="xp-divers" className="card">
          <h2 className="card-title">Stages divers</h2>
          <div className="card-content">
            {otherExperience.map((experience, index) => (
              <div key={index}>
                <h3>{experience.title}</h3>
                <p>{experience.position}</p>
                <p>{experience.period}</p>
                <h4>Parcours</h4>
                <ul>
                  {experience.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="centres-interet" className="card">
          <h2 className="card-title">Centres d'intérêt</h2>
          <div className="card-content">
            {interests.map((interest, index) => (
              <p key={index}>{interest}</p>
            ))}
          </div>
        </section>
      </main>

      <section id="mes-projets" className="portfolio">
        <h2>Mes projets</h2>
        <div className="allProjects">
          {projects.map((project, index) => (
            <article key={index}>
              <div>
                <h3 className="title">{project.title}</h3>
                {project.status && (
                  <div className="refonte-status">{project.status}</div>
                )}
                <img
                  src={project.imageUrl}
                  alt={`Image de ${project.title}`}
                  className="description"
                />
              </div>
              <p>{project.description}</p>
              <span className="useTechno">
                {project.technologies.join(" - ")}
              </span>{" "}
              <br />
              {project.siteLink && (
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visiter le site
                </a>
              )}
              {project.videoLink && (
                <a
                  href={project.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir la présentation du projet en vidéo
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
      <Sondage />
    </div>
  );
};

export default HomePage;
