import React from "react";
import PortFolioThumbs from "./components/portfolioThumb";

import pictureOfWebChat from "./content/images/Chat.webp";
import pictureOfWebMarkdown from "./content/images/Markdown.webp";
import pictureOfWebSerpent from "./content/images/Serpent.webp";
import pictureOfWebWorldBucketList from "./content/images/WorldBucketList.webp";
import pictureOfGeoConfinement from "./content/images/GeoConfinement.webp";
import pictureOfCoraDriveAssistant from "./content/images/CoraDriveAssistant.webp";
import pictureOfGithub from "./content/images/github.webp";
import pictureOfMoneyManagement from './content/images/money-management.webp'

import Carousel from "./components/carousel";

import pictureOfAccountResponsible from "./content/images/examin/account_responsible.webp"
import pictureOfActionErrors from "./content/images/examin/action-errors.webp"
import pictureOfAction from "./content/images/examin/action.webp"
import pictureOfAddDocument from "./content/images/examin/add_document.webp"
import pictureOfDocumentations from "./content/images/examin/documentations.webp"
import pictureOfFilter from "./content/images/examin/filter.webp"
import pictureOfHypervisorActions from "./content/images/examin/hypervisor-actions.webp"
import pictureOfOneAction from "./content/images/examin/one_action.webp"
import pictureOfReferential from "./content/images/examin/referential.webp"
import pictureOfRoles from "./content/images/examin/roles.webp"
import pictureOfsummary from "./content/images/examin/summary.webp"


const Portfolio = (props) => {
  const array_of_items_for_examin_carousel = [
    { img_src: pictureOfRoles, img_alt: "Les rôles" },
    { img_src: pictureOfAccountResponsible, img_alt: "Responsable de compte" },
    { img_src: pictureOfActionErrors, img_alt: "Erreurs sur une action" },
    { img_src: pictureOfAction, img_alt: "Les actions dans un plan d'action" },
    { img_src: pictureOfHypervisorActions, img_alt: "Les actions dans un hyperviseur" },
    { img_src: pictureOfOneAction, img_alt: "Une action" },
    { img_src: pictureOfAddDocument, img_alt: "Ajouter un document" },
    { img_src: pictureOfDocumentations, img_alt: "Liste des documents" },
    { img_src: pictureOfFilter, img_alt: "Filtres" },
    { img_src: pictureOfsummary, img_alt: "Le sommaire" },
    { img_src: pictureOfReferential, img_alt: "La liste des réferentiels" },
  ]
  const array_of_items_for_mi_carousel = [
    { img_src: pictureOfWebChat, img_alt: "1" },
    { img_src: pictureOfWebMarkdown, img_alt: "2" },
  ]
  return (
    <section id="portfolio">
      <div className="container">
        <div className="white-divider"></div>
        <div className="heading shadow-black">
          <h2>Portfolio</h2>
        </div>
        <h3 className="my-4 shadow-black">
          <u>Projets Professionnels</u>
        </h3>
        <p className="my-4 text-black font-italic text-center">
          Pour des raisons de droit d'auteur, vous pourrez appercevoir seulement des captures d'écran. <br/>
          Certaines informations seront floutées.
        </p>
        <h4 className="my-4 text-grey shadow-black">Examin</h4>

        <div className="col-md-8 col-sm-12 mx-auto d-block">
          <Carousel
            array_of_items={array_of_items_for_examin_carousel}
            id='examin_carousel'
          />
        </div>

        <h4 className="my-4 text-grey shadow-black">Ministère de l'intérieur</h4>
        <div className="col-md-8 col-sm-12 mx-auto d-block">
          <Carousel
            array_of_items={array_of_items_for_mi_carousel}
            id='mi_carousel'
          />
        </div>

        <h3 className="my-4 shadow-black">
          <u>Projets Personnels</u>
        </h3>
        <h4 className="my-4 text-grey shadow-black">Application web</h4>
        <div className="row">
          <PortFolioThumbs
            link={"http://account.hidemyhome.ovh/transactions/C%C3%A9dric"}
            pictures={pictureOfMoneyManagement}
            altPictures={"App web: Money Management"}
          />
        </div>
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
