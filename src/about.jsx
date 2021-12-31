import React from "react";
import pictureOfMe from "./content/images/me.webp";
import Pdf from "./content/docs/CV.pdf";

const About = (props) => {
  return (
    <section id="about" className="container-fluid">
      <div className="col-8 col-lg-4 text-center mx-auto d-block">
        <img
          src={pictureOfMe}
          alt="C'est moi Cédric"
          className="img-fluid img-thumbnail shadow-box-center"
        />
      </div>
      <div className="pb-4 text-center">
        <h1 className="text-white mt-4 text-uppercase shadow-black">
          Bienvenue sur mon portfolio
        </h1>
        <div className="horizontaLine1"></div>
        <div className="horizontaLine2"></div>
        <div className="horizontaLine3"></div>
        <div className="horizontaLine4"></div>

        <div className="card col-8 col-lg-6 text-center mx-auto d-block p-0 shadow-box-center border-0">
          <div className="card-header text-white shadow-black">
            <h3>Développeur Junior FullStack</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title">En quelques mots...</h5>
            <div
              className="card-text text-justify mt-3 p-3"
              style={{ textIndent: "1em", fontSize: "1.1em" }}
            >
              <p>
                Passionné par le développement informatique depuis mon adolescence.
              </p>
              <p>
                Autodidacte, j’ai amélioré mes compétences en apprenant de nouvelles technologies diverses et variées sur mon temps libre.
                C’est le développement web qui m’a le plus intrigué et sur lequel je me suis le plus focalisé.
                L’exercice du métier de développeur Full-Stack, permettant un apprentissage continu, m’a fait constater que cette profession est un boost de motivation.
                Il est en parfaite adéquation avec ma personnalité, et me permet d’utiliser mon plein potentiel.
                Ma voie étant trouvée et ma motivation sans réserve, je me suis lancé le défi d’en faire une reconversion professionnelle.
              </p>
              <p>
                Je remercie la société Examin de m’avoir fait confiance et de m’avoir suivi dans ce challenge!
              </p>
            </div>
            <a
              href={Pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="button1 shadow-box-center my-4"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
