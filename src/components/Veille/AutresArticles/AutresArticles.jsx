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
    <section className="article-container">
      <h2>Tutoriels</h2>
      {autresArticles.map((article, index) => (
        <div key={index} className="article-item">
          <div className="content">
            <h3>{article.title}</h3>
            <div className="image-container">
              <img src={article.image} alt={article.title} />
            </div>
            <p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                title={article.link}
              >
                Lire l'article
              </a>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AutresArticles;
