import React, { useState, useEffect } from "react";
import "./Tutoriels.scss";

const Tutorials = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const tutorials = [
    {
      title: "Utilisation de Leaflet avec React",
      link: "https://www.linkedin.com/pulse/tutoriel-sur-lutilisation-de-leaflet-avec-react-christian-humbert-qoyhe%3FtrackingId=NV75NlP5RlOPb%252FKi05wRIg%253D%253D/?trackingId=NV75NlP5RlOPb%2FKi05wRIg%3D%3D",
      image: "assets/images/Articles/Leaflet.png",
    },
    {
      title: "React : Comment réaliser un menu-burger fonctionnel",
      link: "https://www.linkedin.com/pulse/react-comment-r%2525C3%2525A9aliser-un-menu-burger-fonctionnel-christian-humbert-zoalc%3FtrackingId=TR6VoJP4RnqwV2vfDWRtSA%253D%253D/?trackingId=TR6VoJP4RnqwV2vfDWRtSA%3D%3D",
      image: "assets/images/Articles/MenuBurger.png",
    },

    {
      title: "React : Comment créer un scroll-to-top-button fonctionnel",
      link: "https://www.linkedin.com/pulse/react-comment-cr%C3%A9er-un-scroll-to-top-button-christian-humbert-l5zte/",
      image: "assets/images/Articles/scroll-to-top-button.png",
    },
  ];

  return (
    <section className="tutorials-container">
      <h2>Tutoriels</h2>
      <div className="tutorials-wave">
        {tutorials.map((tutorial, index) => (
          <div
            key={index}
            className={`tutorial-item tutorial-item-${
              index % 2 === 0 ? "even" : "odd"
            }`}
          >
            <a href={tutorial.link} target="_blank" rel="noopener noreferrer">
              <img
                src={tutorial.image}
                alt={tutorial.title}
                className="tutorial-image"
              />
              <div className="tutorial-title">{tutorial.title}</div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tutorials;
