import React from "react";

const Skill = props => {
  const widthOfBar = valWidth => {
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
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("40%")}
              >
                <h5>HTML 40%</h5>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="35"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("35%")}
              >
                <h5>Bootsrap 35%</h5>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("40%")}
              >
                <h5>Wordpress 40%</h5>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("20%")}
              >
                <h5>React-Native 20%</h5>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("20%")}
              >
                <h5>Firebase 20%</h5>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("30%")}
              >
                <h5>Python (PySide/Qt) 30%</h5>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("20%")}
              >
                <h5>Cybersécurité (Initiation) 10%</h5>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("40%")}
              >
                <h5>CSS 40%</h5>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("20%")}
              >
                <h5>PHP 20%</h5>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("30%")}
              >
                <h5>Javascript 30%</h5>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("20%")}
              >
                <h5>TypeScript 20%</h5>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("30%")}
              >
                <h5>NoSQL - MongoDB 30%</h5>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("30%")}
              >
                <h5>Python-DataScience 30%</h5>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("40%")}
              >
                <h5>Outils Serveur Windows 40%</h5>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("20%")}
              >
                <h5>Jquery 20%</h5>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("20%")}
              >
                <h5>MySQL 20%</h5>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("40%")}
              >
                <h5>React (Redux/Router) 40%</h5>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="35"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("35%")}
              >
                <h5>Express 35%</h5>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("40%")}
              >
                <h5>GIT 40%</h5>
              </div>
            </div>
            <div className="progress ">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthOfBar("50%")}
              >
                <h5>Python-Scraping 50%</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
