import React from "react";

const EducationItem = (props) => {
  return (
    <div className="education-block shadow-box-light">
      <h5>{props.year}</h5>
      <span className="fas fa-graduation-cap"></span>
      <h3>{props.title}</h3>
      <h4>{props.subTitle}</h4>
      <div className="red-divider"></div>
      {props.body}
    </div>
  );
};

export default EducationItem;
