import React, { useState } from "react";
import "./Sondage.scss";
const Sondage = () => {
  const [fillAnimation, setFillAnimation] = useState(false);
  const [resultatAnimation, setResultatAnimation] = useState(false);

  const sondagesAvecResultats = [
    {
      question:
        "Quel support est le plus pratique pour faire des recherches web (réseaux, commerces etc...) ?",
      propositions: [
        { option: "PC", resultat: "66" },
        { option: "Tablette", resultat: "03" },
        { option: "Smartphone", resultat: "31" },
      ],
    },
    {
      question: "Une techno vient d'être mise à jour. Vous: ",
      propositions: [
        { option: "La mettez à jour direct !", resultat: "14" },
        { option: "Vous attendez", resultat: "64" },
        { option: "Je ne change rien !", resultat: "14" },
        { option: "Autre", resultat: "07" },
      ],
    },

    {
      question: "Quel CMS préférez-vous ?",
      propositions: [
        { option: "WordPress", resultat: "20" },
        { option: "Drupal", resultat: "13" },
        { option: "Strapi", resultat: "47" },
        { option: "Autre", resultat: "20" },
      ],
    },

    {
      question:
        "En tant que developpeur, est-il plus judicieux de connaitre, maitriser, se spécialiser dans :",
      propositions: [
        { option: "1 ou 2 langages", resultat: "73" },
        { option: "3 à 5 langages", resultat: "14" },
        { option: "5 langages et +", resultat: "11" },
        { option: "Encore plus", resultat: "02" },
      ],
    },

    {
      question: "Comment préférez-vous travailler votre CSS ?",
      propositions: [
        { option: "Code fait-maison", resultat: "68" },
        { option: "Bootstrap", resultat: "00" },
        { option: "Tailwind", resultat: "30" },
        { option: "IA ou Autres", resultat: "02" },
      ],
    },

    //   {
    //     question: "Un dev backend doit-il travailler du pur front durant ses missions ?",
    //     propositions: [
    //       { option: "Quasi tous les jours !", resultat: "0" },
    //       { option: "Régulièrement", resultat: "0" },
    //       { option: "Très rarement", resultat: "0" },
    //       { option: "Jamais", resultat: "0" },
    //     ],
    //   },
  ];

  const handleSummaryClick = () => {
    setFillAnimation(true);

    setTimeout(() => {
      setResultatAnimation(true);
    }, 1000);
  };

  return (
    <div className="Sondage">
      <h2>Résultats de sondages</h2>
      <p>
        Retrouvez ces sondages sur mon profil{" "}
        <a
          className="link-sondages"
          href="https://www.linkedin.com/in/christian-humbert-developpeur-web/recent-activity/all/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
      {sondagesAvecResultats.map((sondage, index) => (
        <div key={index} className="Question">
          <details>
            <summary onClick={handleSummaryClick}>{sondage.question}</summary>
            <ul>
              {sondage.propositions
                .sort((a, b) => parseInt(b.resultat) - parseInt(a.resultat))
                .map((proposition, propositionIndex) => (
                  <li key={propositionIndex} className="Option">
                    <span className="OptionLabel">{proposition.option}</span>
                    <div className="ProgressBar">
                      <div
                        className={`Fill${fillAnimation ? " filled" : ""}`}
                        style={{
                          width: `${
                            resultatAnimation ? proposition.resultat : 0
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="Resultat">
                      {resultatAnimation ? proposition.resultat : 0}%
                    </span>
                  </li>
                ))}
            </ul>
          </details>
        </div>
      ))}
    </div>
  );
};

export default Sondage;
