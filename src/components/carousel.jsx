import React from "react"

const Carousel = ({ array_of_items, id }) => {
  const array_of_carousel_items = React.useMemo(() => array_of_items.map((item, index) => {
    let active_classname = ""
    if (index === 0) {
      active_classname = "active"
    }
    return (
      <div className={`carousel-item ${active_classname}`} key={index}>
        <img className="d-block w-100 img-carousel" src={item.img_src} alt={item.img_alt} />
      </div>
    )
  }), [array_of_items])

  const array_of_carousel_indicators = React.useMemo(() => array_of_items.map((item, index) => {
    let active_classname = ""
    if (index === 0) {
      active_classname = "active"
    }
    return (
      <li data-target={`#${id}`} data-slide-to={index} className={active_classname}></li>
    )
  }), [array_of_items, id])
  
  return (
    <div id={id} className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {array_of_carousel_indicators}
      </ol>
      <div className="carousel-inner">
        {array_of_carousel_items}
      </div>
      <a className="carousel-control-prev" href={`#${id}`} role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href={`#${id}`} role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Carousel
