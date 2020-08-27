import React, { Component } from "react";

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
    intervalBeforeRequest: 1000,
    lockRequest: false,
  };

  formValidate = (event) => {
    event.preventDefault();

    // Je créé un message
    let message = "";

    // Je fais une copie d'erreur
    const error = Object.assign({}, this.state.error);

    // Je check chaque informations et je mets à jour la variable erreur
    Object.keys(this.state.form).map((key) => {
      // Je check les erreurs
      error[key] =
        this.state.form[key] === "" && key !== "phone" ? true : false;

      // Si erreur, alors je mets à jour le message + je compte le nombre d'erreur
      error[key] &&
        (message =
          "Corrigez l" +
          (error.iError >= 2 ? "es erreurs" : "'erreur") +
          " avant de rappuyer sur le bouton") &&
        (error.iError += 1);

      return error.iError;
    });

    error.iError === 0
      ? console.log("Envoie du formulaire par mail")
      : console.log(error.iError + " erreur(s) " + message);

    // J'actualise le state
    this.setState({ error });
  };

  handleChange = (event) => {
    // Recupère la valeur et le champs correspondant pour les stocker dans le state
    const { value, name } = event.target;

    // S'il s'agit du message, je mets un locker d'une seconde pour éviter trop de setState
    if (!this.state.lockRequest && name === "message") {
      // Je lock
      this.setState({ lockRequest: true });

      //J'attends 1seconde avant de sauvegarder
      setTimeout(() => {
        this.setState({
          form: { ...this.state.form, [name]: value },
          lockRequest: false,
        });
      }, this.state.intervalBeforeRequest);

      //Si ce n'est pas dans 'area' alors je peux faire un set tout de suite
    } else if (name !== "message") {
      this.setState({ form: { ...this.state.form, [name]: value } });
    }
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
