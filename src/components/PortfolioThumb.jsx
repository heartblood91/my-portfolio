import React from 'react'

const PortFolioThumbs = ({
  link,
  pictures,
  altPictures,
}) => {
  return (
    <div className='col-lg-3 col-md-4 col-sm-6 img-url'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img
          className='img-thumbnail'
          src={pictures}
          alt={altPictures}
        />
      </a>
    </div>
  )
}

export default React.memo(PortFolioThumbs)
