import Presentation from "../Presentation/Presentation";
import Langues from "../Langues/Langues";
import OtherSkills from "../OthersSkills/OthersSkills";
import Reseaux from "../Reseaux/Reseaux";
import Hobbies from "../Hobbies/Hobbies";
import Experience from "../Experience/Experience";
import Formation from "../Formation/Formation";
import Portfolio from "../Portfolio/Portfolio";
import Veille from "../Veille/Veille";

const HomePage = () => (
  <>
    <Presentation />
    <Reseaux />
    <Langues />
    <OtherSkills />
    <Hobbies />
    <Experience />
    <Formation />
    <Portfolio />
    <Veille />
  </>
);

export default HomePage;
