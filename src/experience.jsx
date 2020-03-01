import React from "react";

const Experience = props => {
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
                    Développement d'une application Web Responsive Full Stack
                    (from scratch) sous React-Redux et Express.js.
                  </p>

                  <p>
                    Animation de réunion sur les nouveaux outils misent en
                    place, accompagnement et maintenance.
                  </p>
                  <p>
                    Optimisation des tâches quotidiennes en ajoutant de
                    l'automatisation (via les macros de Libre Office).
                  </p>

                  <p>
                    Création d'un logiciel (C++ & QT) permettant, via une
                    interface, d'archiver et d'extraire rapidement divers
                    fichiers (PDF, ODT, MAIL ...).
                  </p>
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
                  <p>Maintenance informatique et serveur</p>
                  <p>
                    <p>Assistant RSSI</p>
                    <u>Equipe projet:</u> mise en place de nouveaux produits et
                    services
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge">
              <span className="fas fa-briefcase"></span>
            </div>
            <div className="timeline-panel-container">
              <div className="timeline-panel">
                <div className="timeline-heading text-center">
                  <h3>Ministère de l'intérieur</h3>
                  <h4>Autres services</h4>
                  <p className="text-muted">
                    <small className="fas fa-clock"></small> 2013-2016
                  </p>
                </div>
                <div className="timeline-body">
                  <p>Garde statique + Opérateur CIC</p>
                  <p>Formation Gardien de la Paix (1an)</p>
                  <p>Adjoint de Sécurité au Commissariat de Paris 12</p>
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
