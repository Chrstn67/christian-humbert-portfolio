import "./Presentation.scss";

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
  profession: "Développeur Frontend",
  description:
    "Curieux de nature, j'ai pu acquérir une expérience dans l'enseignement. Un peu 'touche-à-tout', je m'intéresse au développement web depuis 2021. Je souhaite acquérir de nouvelles compétences, connaitre l'évolution de la technologie informatique et partager mes acquis à d'autres.",
};

const Presentation = () => (
  <>
    <section className="presentation">
      <header className="Header">
        <img className="banner" src="./assets/banner.png" alt="Bannière" />
      </header>
      <div className="profile-container">
        <img
          src="./assets/photo-profil.png"
          className="glassmorphism"
          alt="Profile"
        />
        <div className="age-badge glassmorphism">
          <h1>{personalInfo.name}</h1>
          <p className="age">{personalInfo.age} ans</p>
          <p className="profession">{personalInfo.profession}</p>
          <p className="description">{personalInfo.description}</p>
        </div>
      </div>
    </section>
  </>
);

export default Presentation;
