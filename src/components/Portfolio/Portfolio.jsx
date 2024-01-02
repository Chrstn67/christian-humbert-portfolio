import React, { useState } from "react";
import "./Portfolio.scss";

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
      "Amateurs de paléontologie ou d'animaux disparus, ce site est pour vous ! Venez faire un safari préhistorique, un voyage dans le temps. Partez à la découverte d'animaux dont vous ne soupçonniez peut-être pas l'existence ! Venez collaborer !",
    technologies: ["ViteJS", "SASS"],
    siteLink: "https://chrstn67.github.io/PaleoData/#/",
  },
  {
    title: "Questions pour un Champion",
    imageUrl: "assets/images/qpuc.png",
    description:
      "Des parties du célèbre jeu 'Questions pour un Champion' ? Amusez-vous avec ces quelques variantes en famille ou entre amis !",
    technologies: ["ViteJS", "SASS"],
    siteLink: "https://chrstn67.github.io/questions-pour-un-champion-jeu/",
  },
  // {
  //   title: "Def'Web",
  //   imageUrl: "assets/images/DefWeb.jpeg",
  //   description:
  //     "Je vous propose ici de faire vos recherches sur le service que rendent les différents langages de programmation, les frameworks existants et des notions de vocabulaire. Tout est rangé dans l'ordre alphabétique, mais vous avez la possibilité de rechercher par mots-clés.",
  //   technologies: ["HTML", "CSS", "JS"],
  //   siteLink: "https://chrstn67.github.io/Def-Web/",
  //   status: "REFONTE EN COURS",
  // },
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
      "Voici des cartes d'indentité de chanteuses et chanteurs du monde entier. L'objectif principal est de renseigner la tessiture vocale et l'ambitus de chaque artiste. C'est l'un de mes premiers projets alliant les connaissances acquises durant ma formation DWWM",
    technologies: ["HTML", "CSS", "JS"],
    siteLink: "https://chrstn67.github.io/Voice_Ranger/",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <div className="left-content">
            <h3>{project.title}</h3>
            <div className="image-container">
              <img src={project.imageUrl} alt={project.title} />
            </div>
          </div>
          <div className="right-content">
            <p>{project.description}</p>
            <h4>Technologies utilisées :</h4>
            <ul>
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
            {project.videoLink && (
              <p>
                <a
                  href={project.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir la présentation vidéo
                </a>
              </p>
            )}
            {project.siteLink && (
              <p>
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le site
                </a>
              </p>
            )}
            {/* {project.status && <p>{project.status}</p>} */}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
