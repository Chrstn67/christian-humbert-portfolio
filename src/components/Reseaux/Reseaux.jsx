import "./Reseaux.scss";
import {
  FaEnvelope,
  FaLinkedin,
  FaDiscord,
  FaWhatsapp,
  FaSlack,
  FaInfo,
} from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const SocialMedia = {
  linkedin: "https://www.linkedin.com/in/christian-humbert-developpeur-web/",
  discord: "https://discord.com/invite/8965nuC3HM",
  slack:
    "https://join.slack.com/t/mycliumgroupe/shared_invite/zt-26dxwb0qa-gfLxOej6e0~4X6PJOUshkA",
  whatsapp: "https://whatsapp.com/channel/0029VaZwOjRIXnlifbrBE83N",
  biodev:
    "https://www.linkedin.com/pulse/lhistoire-de-mon-premier-projet-web-et-mes-d%2525C3%2525A9buts-dans-humbert-yqxwe%3FtrackingId=AEJW5zIYSSie0BWbTIsBUA%253D%253D/?trackingId=AEJW5zIYSSie0BWbTIsBUA%3D%3D",
  cv: "./assets/CV-Christian_HUMBERT.pdf",
  email: "chrstn.hmbrt67@outlook.com",
};

const Reseaux = () => (
  <section className="reseaux">
    <div className="title">
      <h2>Réseaux</h2>
    </div>
    <div className="icons">
      <a
        href={SocialMedia.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        title="LikedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href={SocialMedia.biodev}
        target="_blank"
        rel="noopener noreferrer"
        title="BioDev"
      >
        <FaInfo />
      </a>
      <a
        href={SocialMedia.discord}
        target="_blank"
        rel="noopener noreferrer"
        title="Discord"
      >
        <FaDiscord />
      </a>
      <a
        href={SocialMedia.slack}
        target="_blank"
        rel="noopener noreferrer"
        title="Slack"
      >
        <FaSlack />
      </a>
      <a
        href={SocialMedia.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        title="Chaîne WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <a href={`mailto:${SocialMedia.email}`} title="Mail">
        <FaEnvelope />
      </a>
      <a
        href={SocialMedia.cv}
        target="_blank"
        rel="noopener noreferrer"
        title="Curriculum Vitae"
      >
        <ImProfile />
      </a>
    </div>
  </section>
);

export default Reseaux;
