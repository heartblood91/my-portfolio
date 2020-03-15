import React from "react";

const Education = props => {
  return (
    <section id="education">
      <div className="container">
        <div className="blue-divider"></div>
        <div className="heading shadow-blue text-uppercase text-center">
          <h2>Education</h2>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 col-lg-8">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="education-block shadow-box-light">
                  <h5>2020</h5>
                  <span className="fas fa-graduation-cap"></span>
                  <h3>FreeCodeCamp</h3>
                  <h4>Formation Online</h4>
                  <div className="red-divider"></div>
                  <p>
                    Responsive Web Design Certification (<i>en cours</i>)
                  </p>
                  <p>
                    <a
                      href="https://www.freecodecamp.org/heartblood"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le profil public
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="education-block shadow-box-light">
                  <h5>2020</h5>
                  <span className="fas fa-graduation-cap"></span>
                  <h3>Cyberini</h3>
                  <h4>Formation Online Sécurité Informatique</h4>
                  <div className="red-divider"></div>
                  <p>Protection vie privée (5h)</p>
                  <p>Antivirus (1h)</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="education-block shadow-box-light">
                  <h5>2009 - 2012</h5>
                  <span className="fas fa-graduation-cap"></span>
                  <h3>Université Paris Descartes</h3>
                  <h4>Licence de Psychologie</h4>
                  <div className="red-divider"></div>
                  <p>Mention Assez-Bien</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="row">
              <div className="col">
                <div className="education-block shadow-box-light">
                  <h5>2018-2020</h5>
                  <span className="fas fa-graduation-cap"></span>
                  <h3>udemy.com</h3>
                  <h4>Formation Online</h4>
                  <div className="red-divider"></div>
                  <p>
                    <u className="text-uppercase">Bases Web (38h)</u>
                    <br />
                    Html / CSS / Javascript <br />
                    JQuery / Bootstrap / PHP <br />
                    MySQL / Wordpress
                  </p>
                  <p>
                    <u className="text-uppercase">Javascript (27,5 h)</u>
                    <br />
                    Bases / ES6 / ES7
                  </p>
                  <p>
                    <u className="text-uppercase">React</u> <br />
                    React / Redux / React-Router (21h) <br />
                    React Native (3,5h)
                  </p>
                  <p>
                    <u className="text-uppercase">TypeScript (3h)</u>
                  </p>
                  <p>
                    <u className="text-uppercase">Backend</u> <br />
                    Express.js – MongoDB (3,5h) <br />
                    Firebase (3h)
                  </p>
                  <p>
                    <u className="text-uppercase">Git (3,5h)</u>
                  </p>
                  <p>
                    <u className="text-uppercase">Python</u> <br />
                    PySide / PySide2 / QT (21,3h) <br />
                    Scraping (4,5h) <br />
                    DataScience (16h)
                  </p>

                  <p>
                    <u className="text-uppercase">Initiation DevOps</u> <br />
                    Sécurité informatique (5h) <br />
                    Docker (5h)
                  </p>
                  <p>
                    <u className="text-uppercase">Linux (7h)</u>
                  </p>

                  <p>
                    <a
                      href="https://www.udemy.com/user/cedric-freret/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir les formations suivies
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
