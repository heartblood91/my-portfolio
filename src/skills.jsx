import React from "react";
import ReactTooltip from "react-tooltip";

const Skill = (props) => {
  const widthOfBar = (valWidth) => {
    return { width: valWidth };
  };

  return (
    <section id="skills">
      <div className="blue-divider"></div>
      <div className="heading shadow-blue text-uppercase text-center">
        <h2>Compétences</h2>
      </div>
      <div className="container">
        <div className="row shadow-black">
          <div className="col-xl-4 col-md-6">
            <div className="progress shadow-box-light">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                data-tip="tooltip"
                data-place="top"
                data-for="react"
                data-background-color="#002f68da"
                style={widthOfBar("30%")}
              >
                <h5>React & Redux 30%</h5>
                <ReactTooltip id="react">
                  React / Redux / React-Router
                </ReactTooltip>
              </div>
            </div>
            <div className="progress shadow-box-light">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                data-tip="tooltip"
                data-place="top"
                data-for="react-native"
                data-background-color="#002f68da"
                style={widthOfBar("25%")}
              >
                <h5>React-Native & Expo 25%</h5>
                <ReactTooltip id="react-native">
                  React-Native / Expo / Redux / React-Navigation
                </ReactTooltip>
              </div>
            </div>
            <div className="progress shadow-box-light">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                data-tip="tooltip"
                data-place="top"
                data-for="frontend"
                data-background-color="#002f68da"
                style={widthOfBar("25%")}
              >
                <h5>Frontend 25%</h5>
                <ReactTooltip id="frontend">
                  HTML CSS Bootstrap Javascript PHP Jquery TypeScript
                </ReactTooltip>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="progress shadow-box-light">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
                data-tip="tooltip"
                data-place="top"
                data-for="backend"
                data-background-color="#002f68da"
                style={widthOfBar("30%")}
              >
                <h5>Backend 30%</h5>
                <ReactTooltip id="backend">
                  Express.Js / Mongoose / Firebase
                </ReactTooltip>
              </div>
            </div>
            <div className="progress shadow-box-light">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
                data-tip="tooltip"
                data-place="top"
                data-for="test"
                data-background-color="#002f68da"
                style={widthOfBar("15%")}
              >
                <h5>Mocha 15%</h5>
                <ReactTooltip id="test">
                  Test unitaire utilisé sur une API
                </ReactTooltip>
              </div>
            </div>

            <div className="progress shadow-box-light">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                data-tip="tooltip"
                data-place="top"
                data-for="cms"
                data-background-color="#002f68da"
                style={widthOfBar("50%")}
              >
                <h5>Wordpress 50%</h5>
                <ReactTooltip id="cms">CMS</ReactTooltip>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="progress shadow-box-light">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("40%")}
              >
                <h5>Git 40%</h5>
              </div>
            </div>
            <div className="progress shadow-box-light">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("20%")}
              >
                <h5>Initiation DevOps 20%</h5>
              </div>
            </div>
            <div className="progress shadow-box-light">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                data-background-color="#002f68da"
                style={widthOfBar("40%")}
              >
                <h6>Sensibilisation Cybersécurité 30%</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
