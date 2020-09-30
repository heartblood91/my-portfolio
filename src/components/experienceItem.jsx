import React from "react";

const ExperienceItem = (props) => {
  return (
    <li>
      <div className="timeline-badge">
        <span className="fas fa-briefcase"></span>
      </div>
      <div
        className={
          "timeline-panel-container" +
          (props.index % 2 === 0 ? "" : "-inverted")
        }
      >
        <div className="timeline-panel">
          <div className="timeline-heading text-center">
            <h3>{props.enterprise}</h3>
            <h4>{props.job}</h4>
            <p className="text-muted">
              <small className="fas fa-clock"></small> {props.period}
            </p>
          </div>
          <div className="timeline-body">{props.body}</div>
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem;
