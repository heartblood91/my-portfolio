import React from "react";
import PortFolioThumbs from "./components/portfolioThumb";

//Pictures
import pictureOfWebActrices from "./content/images/Actrices.webp";
import pictureOfWebBurgerCode from "./content/images/burger-code.webp";
import pictureOfWebBurgerCodeAdmin from "./content/images/burger-code-admin.webp";
import pictureOfWebChat from "./content/images/Chat.webp";
import pictureOfWebEasyQuizy from "./content/images/EasyQuizy.webp";
import pictureOfWebFCC1 from "./content/images/FCC1.webp";
import pictureOfWebFCC2 from "./content/images/FCC2.webp";
import pictureOfWebMarkdown from "./content/images/Markdown.webp";
import pictureOfWebMovies from "./content/images/Movies.webp";
import pictureOfWebRecettes from "./content/images/Recettes.webp";
import pictureOfWebSerpent from "./content/images/Serpent.webp";
import pictureOfWebTravelAgency from "./content/images/TravelAgency.webp";
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
        <h4 className="my-4 text-grey shadow-black">FreeCodeCamp</h4>
        <div className="row">
          <PortFolioThumbs
            link={"http://tributepage.freecodecamp.hidemyhome.ovh"}
            pictures={pictureOfWebFCC1}
            altPictures={"Site Web: FreeCodeCamp Tribute Page"}
          />
          <PortFolioThumbs
            link={"http://surveyform.freecodecamp.hidemyhome.ovh"}
            pictures={pictureOfWebFCC2}
            altPictures={"Site Web: FreeCodeCamp Survey Form"}
          />
        </div>
        <h4 className="my-4 text-grey shadow-black">Udemy</h4>
        <br />
        <div className="row">
          <PortFolioThumbs
            link={"http://actrices.hidemyhome.ovh"}
            pictures={pictureOfWebActrices}
            altPictures={"Site Web: Actrices"}
          />
          <PortFolioThumbs
            link={"http://burger-code.hidemyhome.ovh"}
            pictures={pictureOfWebBurgerCode}
            altPictures={"Site Web: BurgerCode"}
          />
          <PortFolioThumbs
            link={"http://burger-code.hidemyhome.ovh/admin"}
            pictures={pictureOfWebBurgerCodeAdmin}
            altPictures={"Site Web: BurgerCode Admin"}
          />
          <PortFolioThumbs
            link={"http://tchat.hidemyhome.ovh"}
            pictures={pictureOfWebChat}
            altPictures={"Site Web: Tchat"}
          />
          <PortFolioThumbs
            link={"http://easy-quizy.hidemyhome.ovh"}
            pictures={pictureOfWebEasyQuizy}
            altPictures={"Site Web: EasyQuizy"}
          />

          <PortFolioThumbs
            link={"http://markdown.hidemyhome.ovh"}
            pictures={pictureOfWebMarkdown}
            altPictures={"Site Web: Markdown"}
          />
          <PortFolioThumbs
            link={"http://movies.hidemyhome.ovh"}
            pictures={pictureOfWebMovies}
            altPictures={"Site Web: Movies"}
          />
          <PortFolioThumbs
            link={"http://recettes.hidemyhome.ovh"}
            pictures={pictureOfWebRecettes}
            altPictures={"Site Web: Recettes"}
          />
          <PortFolioThumbs
            link={"http://snake.hidemyhome.ovh"}
            pictures={pictureOfWebSerpent}
            altPictures={"Site Web: Serpent"}
          />
          <PortFolioThumbs
            link={"http://travel-agency.hidemyhome.ovh"}
            pictures={pictureOfWebTravelAgency}
            altPictures={"Site Web: TravelAgency"}
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
