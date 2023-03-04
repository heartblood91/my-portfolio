import React from 'react'

const EducationItem = ({
  year,
  title,
  subTitle,
  body,
}) => {
  return (
    <div className='education-block shadow-box-light'>
      <h5>{year}</h5>
      <span className='fas fa-graduation-cap'/>
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
      <div className='red-divider'/>
      {body}
    </div>
  )
}

export default React.memo(EducationItem)
