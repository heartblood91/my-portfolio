import React from "react";
import SkillItem from "./components/skillItem";

const Skill = (props) => {
  return (
    <section id="skills">
      <div className="blue-divider"></div>
      <div className="heading shadow-blue text-uppercase text-center">
        <h2>Compétences</h2>
      </div>
      <div className="container">
        <div className="row shadow-black">
          <div className="col-xl-4 col-md-6">
            <SkillItem
              value="30"
              forWhat="react"
              title="React & Redux"
              tooltip="React / Redux / React-Router"
            />
            <SkillItem
              value="30"
              forWhat="react-native"
              title="React-Native"
              tooltip="React-Native / Expo / Redux / React-Navigation"
            />
            <SkillItem
              value="25"
              forWhat="frontend"
              title="Frontend"
              tooltip="HTML CSS Bootstrap Javascript PHP Jquery TypeScript"
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <SkillItem
              value="30"
              forWhat="backend"
              title="Backend"
              tooltip="Express.Js / Mongoose / Firebase"
            />
            <SkillItem
              value="15"
              forWhat="test"
              title="Mocha"
              tooltip="Test unitaire utilisé sur une API"
            />

            <SkillItem value="55" forWhat="git" title="Git" tooltip={null} />
          </div>
          <div className="col-xl-4 col-md-6">
            <SkillItem
              value="20"
              forWhat="python"
              title="Python"
              tooltip="Web Scrapping, Data Analyse"
            />
            <SkillItem
              value="20"
              forWhat="devops"
              title="Initiation DevOps"
              tooltip={null}
            />
            <SkillItem
              value="40"
              forWhat="cybersecurite"
              title="Sensibilisation Cybersécurité"
              tooltip={null}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
