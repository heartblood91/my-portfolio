import React from "react";

const Education = (props) => {
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
                  <p>Protection vie privée </p>
                  <p>Comprendre les Arnarques sur internet</p>
                  <p>Antivirus</p>
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
                    <u className="text-uppercase">React & React-Native</u>{" "}
                    <br />
                    React / Redux / React-Router <br />
                    React Native / Expo / React-Navigation
                  </p>
                  <p>
                    <u className="text-uppercase">Frontend</u>
                    <br />
                    Html / PHP <br />
                    Javascript / ES6 / ES7 <br />
                    TypeScript <br />
                    CSS / JQuery / Bootstrap <br />
                    Wordpress
                  </p>

                  <p>
                    <u className="text-uppercase">Backend</u> <br />
                    Express.js <br />
                    Firebase <br />
                    PHP
                  </p>
                  <p>
                    <u className="text-uppercase">Base de donnée</u>
                    <br />
                    MySQL <br />
                    MongoDB / Mongoose
                  </p>
                  <p>
                    <u className="text-uppercase">Git</u>
                  </p>

                  <p>
                    <u className="text-uppercase">Initiation DevOps</u> <br />
                    DevOps (fondements et principes clés) <br />
                    Sécurité informatique <br />
                    Docker
                  </p>

                  <p>
                    <a
                      href="https://www.udemy.com/user/cedric-freret/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir toutes les formations suivies
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
