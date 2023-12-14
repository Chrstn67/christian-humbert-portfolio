import React from "react";
import "./Articles.scss";

const Articles = () => {
  const tutorials = [
    {
      title: "Utilisation de Leaflet avec React",
      link: "https://www.linkedin.com/pulse/tutoriel-sur-lutilisation-de-leaflet-avec-react-christian-humbert-qoyhe%3FtrackingId=NV75NlP5RlOPb%252FKi05wRIg%253D%253D/?trackingId=NV75NlP5RlOPb%2FKi05wRIg%3D%3D",
      image: "assets/images/Articles/Leaflet.png",
    },
  ];

  return (
    <section className="Articles">
      <h2>Tutoriels</h2>

      <div className="tutorial-list">
        {tutorials.map((tutorial, index) => (
          <a
            key={index}
            href={tutorial.link}
            target="_blank"
            rel="noopener noreferrer"
            className="tutorial-item"
          >
            <div>
              <h3>{tutorial.title}</h3>
              <img
                src={tutorial.image}
                alt={`Image de ${tutorial.title}`}
                className="description"
              />
              <p>Voir le tutoriel</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Articles;
