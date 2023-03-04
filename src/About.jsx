import React from 'react'

import { others } from './content/images'
import Pdf from './content/docs/CV.pdf'

const About = () => {
  const title = 'Lead développeur'

  /// remplacer par la phrase d'accroche
  /// Mettre en place le \n
  const sentences = React.useMemo(() => ([
    'Je suis passionné par le développement informatique depuis mon adolescence.',
    'Autodidacte, j’ai amélioré mes compétences en apprenant de nouvelles technologies diverses et variées sur mon temps libre. C’est le développement web qui m’a le plus intrigué et sur lequel je me suis le plus focalisé. L’exercice du métier de développeur Full-Stack, permettant un apprentissage continu, m’a fait constater que cette profession est un boost de motivation. Il est en parfaite adéquation avec ma personnalité, et me permet d’utiliser mon plein potentiel. Ma voie étant trouvée et ma motivation sans réserve, je me suis lancé le défi d’en faire une reconversion professionnelle.',
    'Je remercie la société Examin de m’avoir fait confiance et de m’avoir suivi dans ce challenge!',
  ]), [])

  const items = React.useMemo(() => {
    return sentences.map((sentence) => {
      return (
        <p key={sentence}>
          {sentence}
        </p>
      )
    })
  }, [sentences])

  return (
    <section id='about' className='container-fluid'>
      <div className='col-8 col-lg-4 text-center mx-auto d-block'>
        <img
          src={others.pictureOfMe}
          alt="C'est moi Cédric"
          className='img-fluid img-thumbnail my-picture shadow-box-center'
        />
      </div>
      <div className='pb-4 text-center'>
        <TitleWithHorizontalLines />

        <div className='card col-8 col-lg-6 text-center mx-auto d-block p-0 shadow-box-center border-0'>
          <div className='card-header text-white shadow-black'>
            <h3>{title}</h3>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>En quelques mots...</h5>
            <div
              className='card-text text-justify mt-3 p-3'
              style={{ textIndent: '1em', fontSize: '1.1em' }}
            >
              {items}
            </div>
            <a
              href={Pdf}
              target='_blank'
              rel='noopener noreferrer'
              className='button1 shadow-box-center my-4'
            >
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(About)

const TitleWithHorizontalLines = React.memo(() => {
  const horizontalLineKeys = React.useMemo(() => {
    const numberOfLine = 4
    return Array(numberOfLine).fill(undefined).map((_, index) => `horizontaLine${index + 1}`)
  }, [])

  const items = React.useMemo(() => {
    return horizontalLineKeys.map((horizontaLine) => {
      return (
        <div className={horizontaLine} key={horizontaLine} />
      )
    })
  }, [horizontalLineKeys])

  return (
    <React.Fragment>
      <h1 className='text-white mt-4 text-uppercase shadow-black'>
        Bienvenue sur mon portfolio
      </h1>
      {items}
    </React.Fragment>
  )
})
