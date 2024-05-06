import React from "react";
import "./AutresArticles.scss";

const AutresArticles = () => {
  const autresArticles = [
    {
      title: "PaleoData : Sa refonte",
      link: "https://www.linkedin.com/pulse/paleodata-son-histoire-christian-humbert-uqxke/?trackingId=6SIFEaky28Y8736bib99%2BA%3D%3D",
      image: "assets/images/PaleoData.png",
    },
    {
      title: "Les IA : Un bien ou un mal ?",
      link: "https://www.linkedin.com/pulse/les-ia-un-bien-ou-mal-christian-humbert-nz3pe/?trackingId=loPV3oqJrklT%2FXSKyumr4w%3D%3D",
      image: "assets/images/Articles/IA.png",
    },
  ];

  return (
    <section className="Autres-articles">
      <h2>Autres articles</h2>

      <div className="article-list">
        {autresArticles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="article-item"
          >
            <div>
              <h3>{article.title}</h3>
              <img
                src={article.image}
                alt={`Image de ${article.title}`}
                className="description"
              />
              <p>Voir l'article sur LinkedIn</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AutresArticles;
