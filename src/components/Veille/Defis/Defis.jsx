import React from "react";
import "./Defis.scss";

const Defis = () => {
  const defis = [
    {
      season: "01",
      name_season: "LinkedIn's Banner",
      link_defi:
        "https://www.linkedin.com/posts/christian-humbert-developpeur-web_je-veux-te-lancer-un-d%C3%A9fi-avis-%C3%A0-toi-activity-7141375181373022208-XrOt?utm_source=share&utm_medium=member_desktop",
      image: "assets/banner.png",

      episodes: [
        {
          episodeNumber: "01",
          name_episode: "François DUVAL",
          link: "https://www.linkedin.com/posts/christian-humbert-developpeur-web_code-analysis-s01-linkedins-banner-activity-7143140515780194304-RRcV?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
  ];

  return (
    <section className="Defis">
      <h2>Code Analysis</h2>

      <div className="defi-list">
        {defis.map((defi, index) => (
          <details key={index}>
            <summary>
              <h3>
                S{defi.season} : {defi.name_season}
              </h3>
              <img
                src={defi.image}
                alt={`Image de ${defi.name_season}`}
                className="description"
              />
              <p>
                <a
                  href={defi.link_defi}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le défi
                </a>
              </p>
              <p>Voir les épisodes</p>
            </summary>

            <div className="season-list">
              {defi.episodes.map((episode) => (
                <details key={episode.episodeNumber}>
                  <summary>
                    <a
                      href={episode.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      EP{episode.episodeNumber}: {episode.name_episode}
                    </a>
                  </summary>
                </details>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Defis;
