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
    <section className="autres-articles-container">
      <h2>Autres articles</h2>
      <div className="autres-articles-wave">
        {autresArticles.map((autreArticle, index) => (
          <div key={index} className="autre-article-item">
            <a
              href={autreArticle.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={autreArticle.image}
                alt={autreArticle.title}
                className="autre-article-image"
              />
              <div className="autre-article-title">{autreArticle.title}</div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutresArticles;
