import React from "react";
import PortFolioThumbs from "./components/portfolioThumb";

import pictureOfWebChat from "./content/images/Chat.webp";
import pictureOfWebMarkdown from "./content/images/Markdown.webp";
import pictureOfWebSerpent from "./content/images/Serpent.webp";
import pictureOfWebWorldBucketList from "./content/images/WorldBucketList.webp";
import pictureOfGeoConfinement from "./content/images/GeoConfinement.webp";
import pictureOfCoraDriveAssistant from "./content/images/CoraDriveAssistant.webp";
import pictureOfGithub from "./content/images/github.webp";

const Portfolio = (props) => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="white-divider"></div>
        <div className="heading shadow-black">
          <h2>Portfolio</h2>
        </div>
        <h3 className="my-4 shadow-black">
          <u>Projets Personnels</u>
        </h3>
        <h4 className="my-4 text-grey shadow-black">Application Android</h4>
        <div className="row">
          <PortFolioThumbs
            link={
              "https://play.google.com/store/apps/details?id=ovh.hidemyhome.geoconfinement"
            }
            pictures={pictureOfGeoConfinement}
            altPictures={"Play Store: Geoconfinement"}
          />
        </div>

        <h4 className="my-4 text-grey shadow-black">Autres</h4>
        <div className="row">
          <PortFolioThumbs
            link={"https://github.com/heartblood91/CoraDriveAssistant"}
            pictures={pictureOfCoraDriveAssistant}
            altPictures={"Github: CoraDriveAssistant"}
          />
        </div>

        <h3 className="my-4 shadow-black">
          <u>Formations</u>
        </h3>
        <h4 className="my-4 text-grey shadow-black">Quelques exemples</h4>
        <div className="row">
          <PortFolioThumbs
            link={"http://tchat.hidemyhome.ovh"}
            pictures={pictureOfWebChat}
            altPictures={"Site Web: Tchat"}
          />
          <PortFolioThumbs
            link={"http://markdown.hidemyhome.ovh"}
            pictures={pictureOfWebMarkdown}
            altPictures={"Site Web: Markdown"}
          />
          <PortFolioThumbs
            link={"http://snake.hidemyhome.ovh"}
            pictures={pictureOfWebSerpent}
            altPictures={"Site Web: Serpent"}
          />
          <PortFolioThumbs
            link={"http://world-bucket-list.hidemyhome.ovh"}
            pictures={pictureOfWebWorldBucketList}
            altPictures={"Site Web: BucketList"}
          />
        </div>
      </div>

      <div
        id="divForGithub"
        className="text-center col-lg-3 col-md-4 col-sm-6 mx-auto"
      >
        <a
          href="https://github.com/heartblood91"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img-fluid" src={pictureOfGithub} alt="Vers Github" />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
