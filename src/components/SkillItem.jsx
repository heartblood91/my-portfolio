import React from 'react'

import ReactTooltip from 'react-tooltip'

const SkillItem = ({
  value,
  title,
  tooltip,
}) => {
  return (
    <div className='progress shadow-box-light'>
      <div
        className='progress-bar'
        role='progressbar'
        aria-valuenow={value}
        aria-valuemin='0'
        aria-valuemax='100'
        data-tip='tooltip'
        data-place='top'
        data-for={tooltip.id}
        data-background-color='#002f68da'
        style={{ width: value + '%' }}
      >
        {title.length > 20 ? (
          <h6> {title} </h6>
        ) : (
          <h5> {title} </h5>
        )}
        <Tooltip {...tooltip} />
      </div>
    </div>
  )
}

export default React.memo(SkillItem)

const Tooltip = React.memo(({
  is_enabled,
  number_of_personnal_project,
  number_of_pro_project,
  id,
}) => {
  const tooltip = React.useMemo(() => {
    const personnal_project_wording_in_plural = putInPlural({
      number: number_of_personnal_project,
      word: 'projet'
    })
    const pro_project_wording_in_plural = putInPlural({
      number: number_of_pro_project,
      word: 'projet'
    })
    const text_for_personnal_project = `${number_of_personnal_project} ${personnal_project_wording_in_plural} perso`
    const text_for_pro_project = `${number_of_pro_project} ${pro_project_wording_in_plural} pro`

    if (number_of_pro_project && number_of_personnal_project) {
      return `${text_for_personnal_project} & ${text_for_pro_project}`
    } else if (number_of_pro_project) {
      return text_for_pro_project
    } else if (number_of_personnal_project) {
      return text_for_personnal_project
    } else {
      return ''
    }
  }, [
    number_of_personnal_project,
    number_of_pro_project,
  ])

  if (is_enabled) {
    return (
      <ReactTooltip
        id={id}>
        {tooltip}
      </ReactTooltip>
    )
  } else {
    return <React.Fragment />
  }
})

const putInPlural = ({ number, word }) => {
  if (2 <= number) {
    return `${word}s`
  } else {
    return word
  }
}
