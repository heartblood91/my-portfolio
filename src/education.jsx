import React, { Fragment } from "react";
import EducationItem from "./components/educationItem";

const Education = (props) => {
  return (
    <section id="education">
      <div className="container">
        <div className="blue-divider"></div>
        <div className="heading shadow-blue text-uppercase text-center">
          <h2>Education</h2>
        </div>
        <div className="row mt-4">
        <div className="col-md-6 col-lg-4">
            <div className="row">
              <div className="col">
                <EducationItem
                  year={"2018-2020"}
                  title={"Udemy"}
                  subTitle={"Formation en ligne"}
                  body={
                    <Fragment>
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
                        NodeJS <br />
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
                        <u className="text-uppercase">Initiation DevOps</u>{" "}
                        <br />
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
                    </Fragment>
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-8">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <EducationItem
                  year={"2020"}
                  title={"Cyberini"}
                  subTitle={"Formation Online Sécurité Informatique"}
                  body={
                    <Fragment>
                      <p>Protection vie privée </p>
                      <p>Comprendre les Arnarques sur internet</p>
                      <p>Antivirus</p>
                    </Fragment>
                  }
                />
              </div>
              <div className="col-lg-6 col-md-12">
                <EducationItem
                  year={"2009 - 2012"}
                  title={"Université Paris Descartes"}
                  subTitle={"Licence de Psychologie"}
                  body={
                    <Fragment>
                      <p>Mention Assez-Bien</p>
                    </Fragment>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
