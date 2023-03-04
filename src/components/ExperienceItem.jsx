import React from 'react'

const ExperienceItem = ({
  index,
  enterprise,
  job,
  period,
  sentences,
}) => {
  const elements = React.useMemo(() => {
    return sentences.map((sentence, index) => {
        return (
          <p key={index}>
            {sentence}
          </p>
        )
      })
  }, [sentences])

  return (
    <li>
      <div className='timeline-badge'>
        <span className='fas fa-briefcase'/>
      </div>
      <div
        className={
          'timeline-panel-container' +
          (index % 2 === 0 ? '' : '-inverted')
        }
      >
        <div className='timeline-panel'>
          <div className='timeline-heading text-center'>
            <h3>{enterprise}</h3>
            <h4 style={{whiteSpace: 'pre-line'}}>{job}</h4>
            <p className='text-muted'>
              <small className='fas fa-clock'/> 
              {period}
            </p>
          </div>
          <div className='timeline-body'>
            {elements}
          </div>
        </div>
      </div>
    </li>
  )
}

export default React.memo(ExperienceItem)
