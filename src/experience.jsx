import React from "react"
import ExperienceItem from "./components/experienceItem"

const Experience = () => {
  const arrayOfSentencesForExamin = React.useMemo(() => ([
    "Développement de l'application web sous React / NodeJS",
    "Mise en place de tests unitaire (Jest) et end to end (Cypress)",
    "Administration et développement de l\'infrastructure existante (Docker, Ansible, Prometheus, Grafana, Compass)",
    "Support client / maintenance (reproduction, analyse et corrections éventuelles de bugs)",
    "Méthodologie SCRUM avec des sprints d\'une semaine",
    "Supervision de stagiaires (Code Review, Pair Programming, Animation de réunion...).",
  ]), [])

  const arrayOfSentencesForDNLH = React.useMemo(() => ([
    "Développement d’une application Web Responsive Full Stack (React + Redux & Express.Js + Mongoose).",
    "Animation de réunion sur les nouveaux outils mis en place, accompagnement et maintenance.",
    "Modernisation, évolution et optimisation des tâches quotidiennes en ajoutant de l'automatisation (via les macros de Libre Office).",
    "Création d'un logiciel (C++ & QT) permettant, via une interface, d'archiver et d'extraire rapidement divers fichiers (PDF, ODT, MAIL ...).",
    "Moderniser et faire évoluer les outils présents.",
  ]), [])

  const arrayOfSentencesForUTSIC = React.useMemo(() => ([
    "Maintenance informatique et serveur d’une grande direction parisienne (~1200 UC / 50 serveurs)",
    "<u>Equipe projet:</u> mise en place de nouveaux produits et services",
  ]), [])

  return (
    <section id="experience">
      <div className="white-divider"></div>
      <div className="heading shadow-black text-uppercase text-center">
        <h2>Expérience Professionelle</h2>
      </div>
      <div className="container">
        <ul className="timeline">
          <ExperienceItem
            index={0}
            enterprise="Examin"
            job="Développeur FullStack Junior"
            period="02/2021 - Aujourd'hui"
            arrayOfSentences={arrayOfSentencesForExamin}
          />
          <ExperienceItem
            index={1}
            enterprise={"Ministère de l'intérieur"}
            job={"Développeur (Web + Logiciel) \nConsultant Fonctionnel"}
            period={"12/2017 - 02/2021"}
            arrayOfSentences={arrayOfSentencesForDNLH}
          />
          <ExperienceItem
            index={2}
            enterprise={"Ministère de l'intérieur"}
            job={"Administrateur machines & serveurs"}
            period={"10/2016 - 12/2017"}
            arrayOfSentences={arrayOfSentencesForUTSIC}
          />
        </ul>
      </div>
    </section>
  )
}

// const ExperienceBodyForExamin = () => {
//   const arrayOfElements = [
//     "Développement de l'application web sous React / NodeJS",
//     "Mise en place de tests unitaire (Jest) et end to end (Cypress)",
//     "Administration et développement de l\'infrastructure existante (Docker, Ansible, Prometheus, Grafana, Compass)",
//     "Support client / maintenance (reproduction, analyse et corrections éventuelles de bugs)",
//     "Méthodologie SCRUM avec des sprints d\'une semaine",
//   ]

//   return (
//     <React.Fragment>
//       {arrayOfElements.map((element, index) => {
//         return (
//           <p key={index}>
//             {element}
//           </p>
//         )
//       })}

//     </React.Fragment>
//   )
// }

export default Experience
