import React, { Component } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:3000";

class Contact extends Component {
  state = {
    form: {
      firstname: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    error: {
      iError: -1,
    },
  };

  formValidate = (event) => {
    event.preventDefault();

    // Je fais une copie d'erreur
    const error = Object.assign({}, this.state.error);

    //Je reset le compteur d'erreur:
    error.iError = 0;

    // Je check chaque informations et je mets à jour la variable erreur
    Object.keys(this.state.form).map((key) => {
      // Je check les erreurs
      error[key] =
        this.state.form[key] === "" && key !== "phone" ? true : false;

      // Je compte le nombre d'erreur
      error[key] && (error.iError += 1);

      return error.iError;
    });

    // Si aucune erreur alors, je fais une requête via axios à l'API pour demander l'envoie d'un mail.
    if (error.iError === 0) {
      axios
        .post(`${BASE_URL}/sendAMail`, {
          // je transmet les informations dans le corps de la requête

          firstname: this.state.form.firstname,
          name: this.state.form.name,
          mail: this.state.form.email,
          phone: this.state.form.phone,
          message: this.state.form.message,
        })
        // si j'ai un retour, sans erreur, je préviens l'utilisateur que son message a été envoyé
        .then((response) => {
          console.log("message envoyé avec la réponse: ", response.data);
        })
        // En cas d'erreur, je n'autorise pas la connexion
        .catch((error) => {
          console.log("Message non envoyé avec l'erreur: ", error);
        });
    }

    // J'actualise le state
    this.setState({ error });
  };

  handleChange = (event) => {
    // Recupère la valeur et le champs correspondant pour les stocker dans le state
    const { value, name } = event.target;

    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  feedbackMessage = () => {
    const isPluriel = this.state.error.iError >= 2 ? "s" : "";
    if (this.state.error.iError > 0) {
      return (
        <p className="text-danger text-center">
          Il y a {this.state.error.iError} champ{isPluriel} obligatoire
          {isPluriel} non rempli{isPluriel}. Il{isPluriel}{" "}
          {isPluriel === "s" ? "sont" : "est"} encadré
          {isPluriel} en rouge.
          <br />
          Corrigez {isPluriel === "s" ? "ces" : "cette"} erreur{isPluriel} avant
          de rappuyer sur le bouton! ;-)
        </p>
      );
    } else if (this.state.error.iError === 0) {
      return (
        <p className="text-success text-center">
          {" "}
          Parfait! Je m'occupe d'envoyer votre message!{" "}
        </p>
      );
    }
  };

  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="blue-divider"></div>
          <div className="heading shadow-blue text-uppercase text-center mb-4">
            <h2>Contactez-moi</h2>
          </div>

          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 mx-auto">
              <form id="contact-form" onSubmit={this.formValidate}>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="firstname">
                      Prénom <span className="blue">*</span>
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      name="firstname"
                      className={
                        "form-control inputFormBlue " +
                        (this.state.error.firstname === undefined
                          ? ""
                          : this.state.error.firstname
                          ? "is-invalid"
                          : "is-valid")
                      }
                      placeholder="Votre prénom"
                      onChange={this.handleChange}
                    />
                    <div className="invalid-feedback">
                      Quel est votre prénom?
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="name">
                      Nom <span className="blue">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className={
                        "form-control inputFormBlue " +
                        (this.state.error.name === undefined
                          ? ""
                          : this.state.error.name
                          ? "is-invalid"
                          : "is-valid")
                      }
                      placeholder="Votre nom"
                      onChange={this.handleChange}
                    />
                    <div className="invalid-feedback">Quel est votre nom?</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">
                      Email <span className="blue">*</span>
                    </label>
                    <input
                      id="email"
                      type="text"
                      name="email"
                      className={
                        "form-control inputFormBlue " +
                        (this.state.error.email === undefined
                          ? ""
                          : this.state.error.email
                          ? "is-invalid"
                          : "is-valid")
                      }
                      placeholder="Votre email"
                      onChange={this.handleChange}
                    />
                    <div className="invalid-feedback">
                      Quelle est votre adresse e-mail?
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone">Téléphone</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className="form-control inputFormBlue"
                      placeholder="Votre téléphone"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="message">
                      Message <span className="blue">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={
                        "form-control inputFormBlue " +
                        (this.state.error.message === undefined
                          ? ""
                          : this.state.error.message
                          ? "is-invalid"
                          : "is-valid")
                      }
                      placeholder="Votre message"
                      rows="4"
                      onChange={this.handleChange}
                    ></textarea>
                    <div className="invalid-feedback">
                      Quel est votre message?
                    </div>
                  </div>
                  <div className="col-md-12 font-weight-bold">
                    <p className="blue mt-2">
                      * Ces informations sont requises.
                    </p>
                    {this.feedbackMessage()}
                  </div>
                  <div className="col-md-12">
                    <input
                      type="submit"
                      className="button1 shadow-box-center"
                      value="Envoyer"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
