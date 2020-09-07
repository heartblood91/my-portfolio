import React from "react";

const FormContact = (props) => {
  // Récupère les props
  const {
    name,
    label,
    placeholder,
    invalidFeed,
    isRequired,
    stateError,
    stateLockForm,
    handleChange,
  } = props;

  // Classname commune entre le texte area et les autres

  let className = {
    id: name,
    type: "text",
    name,
    className:
      "form-control inputFormBlue " +
      (stateError[name] === undefined || !stateLockForm[name]
        ? ""
        : stateError[name]
        ? "is-invalid"
        : "is-valid"),
    placeholder,
    onChange: handleChange,
  };

  return (
    // En fonction du type (area vs input) on retourne un composant différent
    <div className={"mt-2 col-md-" + (name === "message" ? "12" : "6")}>
      <label htmlFor={name}>
        {label} {isRequired ? <span className="blue">*</span> : ""}
      </label>
      {name !== "message" ? (
        <input {...className} />
      ) : (
        <textarea {...className} rows="4" />
      )}
      <div className="invalid-feedback">{invalidFeed}</div>
    </div>
  );
};

export default FormContact;
