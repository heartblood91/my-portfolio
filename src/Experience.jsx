import React from 'react'

import { ExperienceItem } from './components'

const Experience = () => {
  const sentencesForExaminLeadDev = React.useMemo(() => ([
    'Responsable des choix techniques pour l’application',
    'Élaborer son architecture',
    'Administration et développement de l\'infrastructure existante (Docker, Ansible, Prometheus, Grafana, Compass).',
    'Maintenir sa stabilité et la faire évoluer au besoin.',
    'Participer au recrutement de nouveau développeur',
    'Assurer le maintien en compétence de l’équipe technique (pair programming, code review …)',
    '+ Les missions et les responsabilités de mon précédent poste (Développeur fullstack JS confirmé)',
  ]), [])

  const sentencesForExamin = React.useMemo(() => ([
    'Développement de l\'application web sous React / NodeJS',
    'Mise en place de tests unitaire (Jest) et end to end (Cypress)',
    'Administration et développement de l\'infrastructure existante (Docker, Ansible, Prometheus, Grafana, Compass)',
    'Support client / maintenance (reproduction, analyse et corrections éventuelles de bugs)',
    'Méthodologie SCRUM avec des sprints d\'une semaine',
    'Supervision de stagiaires (Code Review, Pair Programming, Animation de réunion...).',
  ]), [])

  const sentencesForDNLH = React.useMemo(() => ([
    'Développement d’une application Web Responsive Full Stack (React + Redux & Express.Js + Mongoose).',
    'Animation de réunion sur les nouveaux outils mis en place, accompagnement et maintenance.',
    'Modernisation, évolution et optimisation des tâches quotidiennes en ajoutant de l\'automatisation (via les macros de Libre Office).',
    'Création d\'un logiciel (C++ & QT) permettant, via une interface, d\'archiver et d\'extraire rapidement divers fichiers (PDF, ODT, MAIL ...).',
    'Moderniser et faire évoluer les outils présents.',
  ]), [])

  const sentencesForUTSIC = React.useMemo(() => ([
    'Maintenance informatique et serveur d’une grande direction parisienne (~1200 UC / 50 serveurs)',
    '<u>Equipe projet:</u> mise en place de nouveaux produits et services',
  ]), [])

  const contents = React.useMemo(() => [
    { enterprise: 'Examin', job: 'Lead Dev', period: '10/2022 - aujourd\'hui', sentences: sentencesForExaminLeadDev },
    { enterprise: 'Examin', job: 'Développeur FullStack Confirmé', period: '02/2021 - 10/2022', sentences: sentencesForExamin },
    { enterprise: 'Ministère de l\'Intérieur', job: 'Développeur (Web + Logiciel) \nConsultant Fonctionnel', period: '12/2017 - 02/2021', sentences: sentencesForDNLH },
    { enterprise: 'Ministère de l\'Intérieur', job: 'Administrateur machines & serveurs', period: '10/2016 - 12/2017', sentences: sentencesForUTSIC }
  ], [
    sentencesForExamin,
    sentencesForDNLH,
    sentencesForUTSIC,
    sentencesForExaminLeadDev,
  ])

  const items = React.useMemo(() => {
    return contents.map((content, index) => {
      return (
        <ExperienceItem
          key={`${content.enterprise}_${index}`}
          index={index}
          enterprise={content.enterprise}
          job={content.job}
          period={content.period}
          sentences={content.sentences}
        />
      )
    }, [])
  }, [contents])

  return (
    <section id='experience'>
      <div className='white-divider'></div>
      <div className='heading shadow-black text-uppercase text-center'>
        <h2>Expérience Professionelle</h2>
      </div>
      <div className='container'>
        <ul className='timeline'>
          {items}
        </ul>
      </div>
    </section>
  )
}

export default React.memo(Experience)
