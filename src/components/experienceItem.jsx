import React from "react"

const ExperienceItem = ({
  index,
  enterprise,
  job,
  period,
  arrayOfSentences,
}) => {
  return (
    <li>
      <div className="timeline-badge">
        <span className="fas fa-briefcase"></span>
      </div>
      <div
        className={
          "timeline-panel-container" +
          (index % 2 === 0 ? "" : "-inverted")
        }
      >
        <div className="timeline-panel">
          <div className="timeline-heading text-center">
            <h3>{enterprise}</h3>
            <h4 style={{whiteSpace: "pre-line"}}>{job}</h4>
            <p className="text-muted">
              <small className="fas fa-clock"></small> {period}
            </p>
          </div>
          <div className="timeline-body">
            {arrayOfSentences.map((sentence, index) => {
              return (
                <p key={index}>
                  {sentence}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </li>
  )
}

export default ExperienceItem
