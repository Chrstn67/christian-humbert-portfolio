import "./Langues.scss";

const Langues = {
  languageSkills: [
    { language: "Français", level: "Langue maternelle" },
    { language: "Langue des Signes Française", level: "Notions" },
    { language: "Langage Parlé-Complété", level: "Avancé" },
    { language: "Lecture Labio-faciale", level: "Maitrisée" },
    { language: "Anglais", level: "A1-A2" },
    { language: "Espagnol", level: "B2-C1" },
    { language: "Russe", level: "A1" },
  ],
};

const LanguageCard = ({ language, level }) => (
  <div className="language-card">
    <h3 className="language-name">{language}</h3>
    <p className="level-text">{level}</p>
  </div>
);

const LanguageSkills = () => (
  <div className="language-skills-container">
    <h2>Langues</h2>
    <div className="language-cards-container">
      {Langues.languageSkills.map(({ language, level }, index) => (
        <LanguageCard key={index} language={language} level={level} />
      ))}
    </div>
  </div>
);

export default LanguageSkills;
