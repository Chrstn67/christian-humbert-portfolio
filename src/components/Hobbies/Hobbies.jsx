import "./Hobbies.scss";

const Hobbies = () => {
  const interests = [
    "Musique",
    "Randonnées",

    "Paléontologie",
    "Entomologie",
    "Maths",
    "Lecture",
    "Football télévisé",
  ];

  return (
    <section className="hobbies-container">
      <h2>Hobbies</h2>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </section>
  );
};

export default Hobbies;
