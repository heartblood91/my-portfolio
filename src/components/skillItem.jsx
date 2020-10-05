import React from "react";
import ReactTooltip from "react-tooltip";

const SkillItem = (props) => {
  // Réalise un tooltip si besoin
  const renderTooltip = () => {
    if (props.tooltip !== null) {
      return <ReactTooltip id={props.forWhat}>{props.tooltip}</ReactTooltip>;
    }
  };

  // Réalise le rendu de l'ensemble des titres
  const titleOfProgressBar = () => {
    return props.title + " " + props.value + "%";
  };

  return (
    <div className="progress shadow-box-light">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={props.value}
        aria-valuemin="0"
        aria-valuemax="100"
        data-tip="tooltip"
        data-place="top"
        data-for={props.forWhat}
        data-background-color="#002f68da"
        style={{ width: props.value + "%" }}
      >
        {props.title.length > 20 ? (
          <h6> {titleOfProgressBar()} </h6>
        ) : (
          <h5>{titleOfProgressBar()}</h5>
        )}
        {renderTooltip()}
      </div>
    </div>
  );
};

export default SkillItem;
