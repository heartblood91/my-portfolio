import React from "react";
import pictureOfMe from "./content/images/me.webp";
import Pdf from "./content/docs/CV.pdf";

const About = props => {
  return (
    <section id="about" className="container-fluid">
      <div className="col-8 col-lg-4 text-center mx-auto d-block">
        <img
          src={pictureOfMe}
          alt="C'est moi Cédric"
          className="img-fluid img-thumbnail"
        />
      </div>
      <div className="pb-4 text-center">
        <h1 className="text-white mt-4 text-uppercase">
          Bienvenue sur mon portfolio
        </h1>
        <h3 className="text-grey">Développeur Junior FullStack</h3>
        <a
          href={Pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="button1"
        >
          Télécharger CV
        </a>
      </div>
    </section>
  );
};

export default About;
