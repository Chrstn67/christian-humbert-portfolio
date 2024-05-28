import "./OthersSkills.scss";

const OthersSkills = {
  otherSkills: ["Permis B", "RQTH illimitée"],
};

const OtherSkillCard = ({ skill }) => (
  <div className="other-skill-card">
    <p className="skill-text">{skill}</p>
  </div>
);

const OtherSkills = () => (
  <div className="other-skills-container">
    <h2>Autres</h2>
    <div className="other-skills-cards-container">
      {OthersSkills.otherSkills.map((skill, index) => (
        <OtherSkillCard key={index} skill={skill} />
      ))}
    </div>
  </div>
);

export default OtherSkills;
