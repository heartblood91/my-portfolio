import React, { Fragment } from "react";
import ExperienceItem from "./components/experienceItem";

const Experience = (props) => {
  return (
    <section id="experience">
      <div className="white-divider"></div>
      <div className="heading shadow-black text-uppercase text-center">
        <h2>Expérience Professionelle</h2>
      </div>
      <div className="container">
        <ul className="timeline">
        <ExperienceItem
            index={0}
            enterprise="Examin"
            job="Développeur FullStack Junior"
            period="2021 - Aujourd'hui"
            body={
              <Fragment>
                <p>
                  Développement de l'application web sous React / NodeJS <br/>
                  <a
                    href="https://examin.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (https://examin.io)
                  </a>
                </p>
                <p>
                  Mise en place de tests unitaire (Jest) et end to end (Cypress)
                </p>
                <p>
                  Administration et développement de l'infrastructure existante (Docker, Ansible, Prometheus, Grafana, Compass)
                </p>
                <p>
                  Support client / maintenance (reproduction, analyse et corrections éventuelles de bugs)
                </p>
                <p>
                  Méthodologie SCRUM avec des sprints d'une semaine
                </p>
                <div className="text-center">
                  <a
                    href="https://www.linkedin.com/in/cedric-freret/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Plus de détail sur mon compte linkedin
                  </a>
              </div>

              </Fragment>
            }
          />
          <ExperienceItem
            index={1}
            enterprise={"Ministère de l'intérieur"}
            job={
              <Fragment>
                Développeur (Web + Logiciel)
                <br />
                Consultant Fonctionnel
              </Fragment>
            }
            period={"2017 - Aujourd'hui"}
            body={
              <Fragment>
                <p>
                  Développement d’une application Web Responsive Full Stack
                  (React + Redux & Express.Js + Mongoose).
                </p>
                <p>
                  Animation de réunion sur les nouveaux outils mis en place,
                  accompagnement et maintenance.
                </p>
                <p>
                  Modernisation, évolution et optimisation des tâches
                  quotidiennes en ajoutant de l'automatisation (via les macros
                  de Libre Office).
                </p>
                <p>
                  Création d'un logiciel (C++ & QT) permettant, via une
                  interface, d'archiver et d'extraire rapidement divers fichiers
                  (PDF, ODT, MAIL ...).
                </p>
                <p>Moderniser et faire évoluer les outils présents.</p>
              </Fragment>
            }
          />
          <ExperienceItem
            index={2}
            enterprise={"Ministère de l'intérieur"}
            job={"Administrateur machines & serveurs"}
            period={"2016 - 2017"}
            body={
              <Fragment>
                <p>
                  Maintenance informatique et serveur d’une grande direction
                  parisienne (~1200 UC / 50 serveurs)
                </p>
                <p>Assistant RSSI</p>
                <p>
                  <u>Equipe projet:</u> mise en place de nouveaux produits et
                  services
                </p>
              </Fragment>
            }
          />
        </ul>
      </div>
    </section>
  );
};

export default Experience;
