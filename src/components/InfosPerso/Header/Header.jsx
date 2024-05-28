import "./Header.scss";

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
};

const InfosPerso = () => {
  return (
    <section className="infos-perso">
      <section className="header">
        <div className="profile-pic">
          <img
            src="./assets/photo-profil.png"
            alt="Photo de profil, Christian HUMBERT"
          />
          <div className="age-badge">
            <p>{personalInfo.age} ans</p>
          </div>
        </div>
        <aside>
          <p>
            Curieux de nature, j&#39;ai pu acquérir une expérience dans
            l&#39;enseignement. Un peu &#39;touche-à-tout&#39;, je
            m&#39;intéresse au développement web depuis 2021. Je souhaite
            acquérir de nouvelles compétences, connaitre l&#39;évolution de la
            technologie informatique et partager mes acquis à d&#39;autres.
          </p>
        </aside>
      </section>
    </section>
  );
};

export default InfosPerso;
