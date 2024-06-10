import "./Tutoriels.scss";

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

const Tutoriel = () => {
  return (
    <section className="tutoriel-container">
      <h2>Tutoriels</h2>
      {tutorials.map((tutorial, index) => (
        <div key={index} className="tutorial-item">
          <div className="content">
            <h3>{tutorial.title}</h3>
            <div className="image-container">
              <img src={tutorial.image} alt={tutorial.title} />
            </div>
            <p>
              <a
                href={tutorial.link}
                target="_blank"
                rel="noopener noreferrer"
                title={tutorial.link}
              >
                Lire le tutoriel
              </a>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Tutoriel;
