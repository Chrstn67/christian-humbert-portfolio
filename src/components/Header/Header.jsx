import "./Header.scss";

function Header() {
  return (
    <header className="Header">
      <img className="banner" src="./assets/banner.png" alt="Bannière" />

      <img
        className="photo-profil"
        src="./assets/images/Photo-profil.png"
        alt="Photo de profil, Christian HUMBERT"
      />
    </header>
  );
}

export default Header;
