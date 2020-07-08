import React from "react";

const PortFolioThumbs = (props) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img
          className="img-thumbnail"
          src={props.pictures}
          alt={props.altPictures}
        />
      </a>
    </div>
  );
};

export default PortFolioThumbs;
