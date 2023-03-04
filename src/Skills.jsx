import React from 'react'

import { SkillItem } from './components'

const Skill = () => {
  const skills = React.useMemo(() => [
    { value: '50', title: 'React', tooltip: { number_of_personnal_project: 2, number_of_pro_project: 2 } },
    { value: '60', title: 'Typescript', tooltip: { number_of_personnal_project: 2, number_of_pro_project: 1 } },
    { value: '10', title: 'Redux', tooltip: { number_of_personnal_project: 0, number_of_pro_project: 1 } },
    { value: '30', title: 'React-Native', tooltip: { number_of_personnal_project: 1, number_of_pro_project: 0 } },
    { value: '60', title: 'NodeJS', tooltip: { number_of_personnal_project: 4, number_of_pro_project: 3 } },
    { value: '50', title: 'Deno', tooltip: { number_of_personnal_project: 1, number_of_pro_project: 0 } },
    { value: '40', title: 'Cypress / Jest / Mocha' },
    { value: '75', title: 'Git' },
    { value: '20', title: 'Python' },
    { value: '35', title: 'DevOps' },
    { value: '70', title: 'Méthodologie SCRUM' },
    { value: '40', title: 'Sensibilisation Cybersécurité' },
  ], [])

  const items = React.useMemo(() => {
    return skills.reduce((acc, skill, index) => {
      const el = <SkillItem
        key={`${skill.title}_${index}`}
        value={skill.value}
        title={skill.title}
        tooltip={{
          is_enabled: skill.tooltip ? true : false,
          number_of_personnal_project: skill.tooltip?.number_of_personnal_project,
          number_of_pro_project: skill.tooltip?.number_of_pro_project,
          id: skill.title.toLowerCase(),
        }}
      />

      if (index % 4 === 0) {
        acc.push([el])
      } else {
        const currentArray = Math.floor(index / 4)
        acc[currentArray].push(el)
      }

      return acc
    }, [])
    .map((elements, index) => {
      return (
        <div key={index} className='col-xl-4 col-md-6'>
          {elements}
        </div>
      )
    })
  }, [skills])

  return (
    <section id='skills'>
      <div className='blue-divider'></div>
      <div className='heading shadow-blue text-uppercase text-center'>
        <h2>Compétences</h2>
      </div>
      <div className='container'>
        <div className='row shadow-black'>
          {items}
        </div>
      </div>
    </section>
  )
}

export default React.memo(Skill)
