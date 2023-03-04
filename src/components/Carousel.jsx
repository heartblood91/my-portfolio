import React from 'react'

const Carousel = ({ items, id }) => {
  const carouselItems = React.useMemo(() => items.map((item, index) => {
    const activeClassname = index === 0 ? 'active' : ''

    return (
      <div className={`carousel-item ${activeClassname}`} key={index}>
        <img className='d-block w-100 img-carousel' src={item.imgSrc} alt={item.imgAlt} />
      </div>
    )
  }), [items])

  const carouselIndicators = React.useMemo(() => items.map((_, index) => {
    const activeClassname = index === 0 ? 'active' : ''
    return (
      <li data-target={`#${id}`} data-slide-to={index} className={activeClassname} key={index}/>
    )
  }), [items, id])
  
  return (
    <div id={id} className='carousel slide' data-ride='carousel'>
      <ol className='carousel-indicators'>
        {carouselIndicators}
      </ol>
      <div className='carousel-inner'>
        {carouselItems}
      </div>
      <a className='carousel-control-prev' href={`#${id}`} role='button' data-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true'/>
        <span className='sr-only'>Précédent</span>
      </a>
      <a className='carousel-control-next' href={`#${id}`} role='button' data-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true'/>
        <span className='sr-only'>Suivant</span>
      </a>
    </div>
  )
}

export default React.memo(Carousel)
