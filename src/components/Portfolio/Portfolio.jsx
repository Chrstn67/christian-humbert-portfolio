import { useState, useEffect } from "react";
import "./Portfolio.scss";

const projects = [
  {
    title: "Le Relais Du Dompeter",
    imageUrl: "assets/images/LogoDompeter.png",
    description:
      "Mon premier site pour un vrai client ! Un site vitrine pour vous donner envie de visiter l'Alsace et passer votre séjour au Relais du Dompeter !",
    technologies: ["ViteJS", "SCSS", "React-Leaflet"],
    siteLink: "https://www.lerelaisdudompeter.alsace/",
  },
  {
    title: "PaleoData",
    imageUrl: "assets/images/PaleoData.png",
    description:
      "Venez faire un safari préhistorique, un voyage dans le temps. Partez à la découverte d'animaux dont vous ne soupçonniez peut-être pas l'existence ! Venez collaborer !",
    technologies: ["ViteJS", "SCSS", "React-Leaflet"],
    status: "V3 EN CONCEPTION",
    siteLink: "https://chrstn67.github.io/PaleoData/#/",
  },
  {
    title: "Questions pour un Champion",
    imageUrl: "assets/images/qpuc.png",
    description:
      "Des parties du célèbre jeu 'Questions pour un Champion' ? Amusez-vous avec ces quelques variantes en famille ou entre amis !",
    technologies: ["ViteJS", "SCSS"],
    siteLink: "https://chrstn67.github.io/questions-pour-un-champion-jeu/",
  },
  {
    title: "WriterTalent",
    imageUrl: "assets/images/logo_WriterTalent.png",
    description:
      "Nous offrons l'opportunité de lire le travail des écrivains en herbe qui aiment partager le fruit de leur imagination avec une communauté. Le site n'est pas encore accessible au public.",
    technologies: ["React", "SCSS", "Symfony"],
    videoLink:
      "https://www.linkedin.com/posts/christian-humbert-developpeur-web_et-voil%C3%A0-la-pr%C3%A9sentation-de-notre-projet-activity-7060258632805834752-DYZI?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Mail Search Job Manager",
    imageUrl: "assets/images/envoie-lettres.jpeg",
    description:
      "Cela vous dit de laisser l'indémodable papier-stylo de côté ? Suivez vos lettres de candidature ! Vous pourrez spécifier le statut de votre réponse. Bonne recherche à vous !",
    technologies: ["React", "SCSS", "GeoAPI"],
    siteLink: "https://chrstn67.github.io/Mail-Search-Job-Manager/",
    status: "REFONTE EN COURS",
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
                  title={project.siteLink}
                >
                  Voir le site
                </a>
              </p>
            )}
            {project.status && <p className="status">{project.status}</p>}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
