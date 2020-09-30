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
            index={1}
            enterprise={"Ministère de l'intérieur"}
            job={"Administrateur machine & serveur"}
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
