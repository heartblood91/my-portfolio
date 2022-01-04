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
              value="50"
              title="React"
              tooltip = {{
                is_enabled: true,
                number_of_personnal_project: 2,
                number_of_pro_project: 2,
                id: "react",
              }}
            />
            <SkillItem
              value="60"
              title="Typescript"
              tooltip = {{
                is_enabled: true,
                number_of_personnal_project: 1,
                number_of_pro_project: 1,
                id: "typescript",
              }}
            />
            <SkillItem
              value="20"
              title="Redux"
              tooltip = {{
                is_enabled: true,
                number_of_personnal_project: 0,
                number_of_pro_project: 1,
                id: "redux",
              }}
            />
            <SkillItem
              value="30"
              title="React-Native"
              tooltip = {{
                is_enabled: true,
                number_of_personnal_project: 1,
                number_of_pro_project: 0,
                id: "react-native",
              }}
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <SkillItem
              value="60"
              title="NodeJS"
              tooltip = {{
                is_enabled: true,
                number_of_personnal_project: 4,
                number_of_pro_project: 3,
                id: "nodejs",
              }}
            />
            <SkillItem
              value="40"
              title="Cypress / Jest / Mocha"
              tooltip = {{
                is_enabled: false,
              }}
            />
            <SkillItem
              value="65"
              title="Git"
              tooltip = {{
                is_enabled: false,
              }}
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <SkillItem
              value="20"
              title="Python"
              tooltip = {{
                is_enabled: false,
              }}
            />
            <SkillItem
              value="35"
              title="DevOps"
              tooltip = {{
                is_enabled: false,
              }}
            />
            <SkillItem
              value="70"
              title="Méthodologie SCRUM"
              tooltip = {{
                is_enabled: false,
              }}
            />
            <SkillItem
              value="40"
              title="Sensibilisation Cybersécurité"
              tooltip = {{
                is_enabled: false,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
