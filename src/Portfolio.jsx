import React from 'react'

import { PortFolioThumbs, Carousel } from './components'

import {
  others,
  examin,
  MI,
} from './content/images'

const Portfolio = () => {
  const itemsForExaminCarousel = React.useMemo(() => [
    { imgSrc: examin.pictureOfErrorAction, imgAlt: 'Erreur sur une action' },
    { imgSrc: examin.pictureOfHypervisorAction, imgAlt: 'Une action dans l\'hyperviseur' },
    { imgSrc: examin.pictureOfActionPlan, imgAlt: 'Plan d\'action' },
    { imgSrc: examin.pictureOfOneAction, imgAlt: 'Une action' },
    { imgSrc: examin.pictureOfListOfRegulations, imgAlt: 'Liste des réglementations' },
    { imgSrc: examin.pictureOfOneRegulation, imgAlt: 'Une réglementation' },
    { imgSrc: examin.pictureOfOneEval, imgAlt: 'Une évaluation' },
    { imgSrc: examin.pictureOfAddFile, imgAlt: 'Les fichiers' },
    { imgSrc: examin.pictureOfListOfFiles, imgAlt: 'Liste de documents' },
    { imgSrc: examin.pictureOfStats, imgAlt: 'Les statistiques' },
  ], [])

  const itemsForMICarousel = React.useMemo(() => [
    { imgSrc: MI.pictureOfLogin, img: 'Connexion' },
    { imgSrc: MI.pictureOfModeNormal, img: 'Mode normal' },
    { imgSrc: MI.pictureOfDarkMode, img: 'Mode sombre' },
    { imgSrc: MI.pictureOfMyProfil, img: 'Mon profil' },
    { imgSrc: MI.pictureOfChooseMatch, img: 'Sélectionner une rencontre' },
    { imgSrc: MI.pictureOfRapportCh, img: 'Rapport CH' },
    { imgSrc: MI.pictureOfRapportSir, img: 'Rapport SIR' },
    { imgSrc: MI.pictureOfRapportSir2, img: 'Rapport SIR (suite)' },
    { imgSrc: MI.pictureOfRapportValidate, img: 'Validation d\'un rapport' },
    { imgSrc: MI.pictureOfMatchSignales, img: 'Match signalé' },
    { imgSrc: MI.pictureOfRapportArretes, img: 'Les arrêtés' },
    { imgSrc: MI.pictureOfAdminUser, img: 'Administration des utilisateurs' },
  ], [])

  const webApps = React.useMemo(() => ([
    { link: 'http://account.hidemyhome.ovh/transactions/C%C3%A9dric', pictures: others.pictureOfMoneyManagement, altPictures: 'App web: Money Management' }
  ]), [])

  const androidApps = React.useMemo(() => ([
    { link: 'https://play.google.com/store/apps/details?id=ovh.hidemyhome.geoconfinement', pictures: others.pictureOfGeoConfinement, altPictures: 'Play Store: Geoconfinement' }
  ]), [])

  const nodeApps = React.useMemo(() => ([
    { link: 'https://github.com/heartblood91/coraDriveAssistant', pictures: others.pictureOfCoraDriveAssistant, altPictures: 'Github: coraDriveAssistant' }
  ]), [])

  const trainingApps = React.useMemo(() => ([
    { link: 'http://tchat.hidemyhome.ovh', pictures: others.pictureOfWebChat, altPictures: 'Site Web: Tchat' },
    { link: 'http://markdown.hidemyhome.ovh', pictures: others.pictureOfWebMarkdown, altPictures: 'Site Web: markdown' },
    { link: 'http://snake.hidemyhome.ovh', pictures: others.pictureOfWebSerpent, altPictures: 'Site Web: serpent' },
    { link: 'http://world-bucket-list.hidemyhome.ovh', pictures: others.pictureOfWebWorldBucketList, altPictures: 'Site Web: BucketList' },
  ]), [])

  const mapTitleToITems = React.useMemo(() => ({
    'privateProject': { type: 'subtitle', content: <u>Projets Personnels</u> },
    'webApp': { type: 'subsubtitle', content: 'Application web' },
    'webApps': { type: 'items', content: webApps },
    'androidApp': { type: 'subsubtitle', content: 'Application Android' },
    'androidApps': { type: 'items', content: androidApps },
    'nodeApp': { type: 'subsubtitle', content: 'Application NodeJS (seulement)' },
    'nodeApps': { type: 'items', content: nodeApps },
    'trainingApp': { type: 'subsubtitle', content: 'Quelques exemples' },
    'trainingApps': { type: 'items', content: trainingApps },
  }), [
    webApps,
    androidApps,
    nodeApps,
    trainingApps,
  ])

  const getElements = React.useCallback((items) => {
    return items.map(item => (
      <PortFolioThumbs
        link={item.link}
        pictures={item.pictures}
        altPictures={item.altPictures}
        key={item.altPictures}
      />
    ))
  }, [])

  const items = React.useMemo(() => {
    return Object.entries(mapTitleToITems).map(([title, item], index) => {
      if (item.type === 'subtitle') {
        return (
          <h3 className='my-4 shadow-black' key={`${title}_${index}`}>
            {item.content}
          </h3>
        )
      } else if (item.type === 'subsubtitle') {
        return (
          <h4 className='my-4 text-grey shadow-black' key={`${title}_${index}`}>{item.content}</h4>
        )
      } else {
        return (
          <div className='row' key={`${title}_${index}`}>
            {getElements(item.content)}
          </div>
        )
      }
    }
    )
  }, [mapTitleToITems, getElements])

  return (
    <section id='portfolio'>
      <div className='container'>
        <div className='white-divider'></div>
        <div className='heading shadow-black'>
          <h2>Portfolio</h2>
        </div>
        <h3 className='my-4 shadow-black'>
          <u>Projets Professionnels</u>
        </h3>
        <p className='my-4 text-black font-italic text-center'>
          Pour des raisons de droit d'auteur, vous pourrez appercevoir seulement des captures d'écran. <br />
          Certaines informations seront floutées.
        </p>
        <h4 className='my-4 text-grey shadow-black'>Examin</h4>

        <div className='col-md-8 col-sm-12 mx-auto d-block'>
          <Carousel
            items={itemsForExaminCarousel}
            id='examin_carousel'
          />
        </div>

        <h4 className='my-4 text-grey shadow-black'>Ministère de l'intérieur</h4>
        <div className='col-md-8 col-sm-12 mx-auto d-block'>
          <Carousel
            items={itemsForMICarousel}
            id='mi_carousel'
          />
        </div>
        {items}
      </div>
      <div
        id='divForGithub'
        className='text-center col-lg-3 col-md-4 col-sm-6 mx-auto'
      >
        <a
          href='https://github.com/heartblood91'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='img-fluid' src={others.pictureOfGithub} alt='Vers Github' />
        </a>
      </div>
    </section>
  )
}

export default React.memo(Portfolio)
