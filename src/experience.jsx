import React from "react";

const Experience = (props) => {
  return (
    <section id="experience">
      <div className="white-divider"></div>
      <div className="heading shadow-black text-uppercase text-center">
        <h2>Expérience Professionelle</h2>
      </div>
      <div className="container">
        <ul className="timeline">
          <li>
            <div className="timeline-badge">
              <span className="fas fa-briefcase"></span>
            </div>
            <div className="timeline-panel-container">
              <div className="timeline-panel">
                <div className="timeline-heading text-center">
                  <h3>Ministère de l'intérieur</h3>
                  <h4>
                    Développeur (Web + Logiciel)
                    <br />
                    Consultant Fonctionnel
                  </h4>
                  <p className="text-muted">
                    <small className="fas fa-clock"></small> 2017 - Aujourd'hui
                  </p>
                </div>
                <div className="timeline-body">
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
                    interface, d'archiver et d'extraire rapidement divers
                    fichiers (PDF, ODT, MAIL ...).
                  </p>
                  <p>Moderniser et faire évoluer les outils présents.</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge">
              <span className="fas fa-briefcase"></span>
            </div>
            <div className="timeline-panel-container-inverted">
              <div className="timeline-panel">
                <div className="timeline-heading text-center">
                  <h3>Ministère de l'intérieur</h3>
                  <h4>Administrateur machine & serveur</h4>
                  <p className="text-muted">
                    <small className="fas fa-clock"></small> 2016-2017
                  </p>
                </div>
                <div className="timeline-body">
                  <p>
                    Maintenance informatique et serveur d’une grande direction
                    parisienne (~1200 UC / 50 serveurs)
                  </p>
                  <p>Assistant RSSI</p>
                  <p>
                    <u>Equipe projet:</u> mise en place de nouveaux produits et
                    services
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
