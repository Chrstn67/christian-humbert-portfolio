import Presentation from "../Presentation/Presentation";
import Langues from "../Langues/Langues";
import OtherSkills from "../OthersSkills/OthersSkills";
import Reseaux from "../Reseaux/Reseaux";
import Hobbies from "../Hobbies/Hobbies";
import ParcoursPro from "../ParcoursPro/ParcoursPro";
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
    <ParcoursPro />
    <Formation />
    <Portfolio />
    <Veille />
  </>
);

export default HomePage;
