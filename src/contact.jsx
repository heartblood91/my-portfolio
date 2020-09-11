import React, { Component, Fragment } from "react";
import axios from "axios";
import FormContact from "./components/formContact";
const BASE_URL = "http://localhost:3000";

// Une partie du state qui fait l'objet d'un reset régulier
const initSomeState = {
  error: {
    iError: -1,
  },
  backendMessage: "",
  inProgress: false,
};

class Contact extends Component {
  state = {
    form: {
      firstname: "",
      name: "",
      email: "",
      tel: "",
      message: "",
      token1: "",
      token2: "",
    },
    lockForm: {
      firstname: false,
      name: false,
      email: false,
      tel: false,
      message: false,
      token1: false,
    },
    errorToken: "",
    ...initSomeState,
  };

  // Lors du montage du composant, on récupère le token nécessaire à l'envoie de mail
  componentDidMount = () => {
    this.refreshToken(false);
  };

  formValidate = (event) => {
    typeof event !== "undefined" && event.preventDefault();

    // Je reset le state puis je continue la fonction
    this.setState(
      {
        ...initSomeState,
      },
      () => {
        // Je fais une copie d'erreur
        const error = Object.assign({}, this.state.error);

        // Je mets le compteur d'erreur à 0
        error.iError = 0;

        // Je check chaque informations et je mets à jour la variable erreur
        Object.keys(this.state.form).map((key) => {
          //  Je check les erreurs. Par défaut, aucune erreur possible à tel ou token1
          error[key] =
            this.state.form[key] === "" && key !== "tel" && key !== "token1"
              ? true
              : false;

          // Je compte le nombre d'erreur
          error[key] && (error.iError += 1);

          return error.iError;
        });

        // Si aucune erreur alors, je fais une requête via axios à l'API pour demander l'envoie d'un email.
        // Pour cela token1 doit être vide (car pot de miel) + token2 doit contenir une valeur correspondant à un token secrètement échangé lors du montage du composant
        if (
          error.iError === 0 &&
          this.state.form.token1 === "" &&
          this.state.form.token2 !== ""
        ) {
          // Reset du message backend
          this.feedbackBackend(null);
          axios
            .post(`${BASE_URL}/sendAMail`, {
              // je transmet les informations dans le corps de la requête

              firstname: this.state.form.firstname,
              name: this.state.form.name,
              email: this.state.form.email,
              tel: this.state.form.tel,
              message: this.state.form.message,
              token: this.state.form.token2,
            })
            // si j'ai un retour, sans erreur, je préviens l'utilisateur que son message a été envoyé
            .then(() => {
              // Reset du message backend
              this.feedbackBackend(true);
            })
            // En cas d'erreur, je n'autorise pas la connexion
            .catch((err) => {
              // Pour éviter un crash, on vérifie l'existance de err.response.data
              let error,
                stateError = "";

              if (typeof err.response === "object") {
                if (err.response.data !== "undefined") {
                  error = err.response.data;
                  stateError = err.response.status;
                } else {
                  error = stateError = err.response;
                }
              } else {
                error = stateError = err;
              }

              this.feedbackBackend(false, error, stateError);
            });
        }

        // J'actualise le state (erreur + je lock les informations validées en cas de changement)
        this.setState({
          error,
          lockForm: {
            firstname: true,
            name: true,
            email: true,
            tel: true,
            message: true,
          },
        });
      }
    );
  };

  handleChange = (event) => {
    // Recupère la valeur et le champs correspondant pour les stocker dans le state + je delock les informations + reset les info du précédent validate
    const { value, name } = event.target;

    // Etape 0: création du informations à MAJ

    // Si aucune transmission en cours alors on reset l'intégralité des infos
    let newState = !this.state.inProgress
      ? Object.assign({}, initSomeState)
      : {};

    // Si un mail est en cours de transmission alors on delock seulement + transmission des new informations
    newState = {
      ...newState,
      form: { ...this.state.form, [name]: value },
      lockForm: { ...this.state.lockForm, [name]: false },
    };

    this.setState({
      ...newState,
    });
  };
  refreshToken = (isFull) => {
    axios
      .get(`${BASE_URL}/createToken`, {})
      // si j'ai un retour, sans erreur, je récupère le token
      .then((response) => {
        // Stock le token dans le state
        this.setState(
          {
            form: { ...this.state.form, token2: response.data },
          },
          () => {
            // Si le refresh a été demandé par l'utilisateur via le bouton, alors, après le setState, on transmet la requête
            isFull && this.formValidate();
          }
        );
      })
      // En cas d'erreur, je ne pourrais pas transmettre de mail, je set le state
      .catch(() => {
        const errorToken = isFull ? "Serveur indisponible" : "Pas de token...";
        this.setState({ errorToken });
      });
  };
  feedbackMessage = () => {
    const isPluriel = this.state.error.iError >= 2 ? "s" : "";
    // Si des erreurs (mais token1 non renseigné)
    if (
      this.state.error.iError > 0 &&
      this.state.form.token1 === "" &&
      this.state.form.token2 !== ""
    ) {
      return (
        <p className="text-danger text-center">
          Il y a {this.state.error.iError} champ{isPluriel} obligatoire
          {isPluriel} mal renseigné{isPluriel}. Il{isPluriel}{" "}
          {isPluriel === "s" ? "sont" : "est"} encadré
          {isPluriel} en rouge.
          <br />
          Corrigez {isPluriel === "s" ? "ces" : "cette"} erreur{isPluriel} avant
          de rappuyer sur le bouton! ;-)
        </p>
      );
      // Si aucune erreur (et token1 non renseigné)
    } else if (
      this.state.error.iError === 0 &&
      this.state.form.token1 === "" &&
      this.state.form.token2 !== ""
    ) {
      return (
        <p className="text-success text-center">
          {" "}
          Parfait! Je m'occupe d'envoyer votre message!{" "}
        </p>
      );

      // Quelque soit le nombre d'erreur ( + token1 renseigné)
    } else if (
      this.state.form.token1 !== "" &&
      this.state.form.token2 === "" &&
      this.state.error.iError >= 0
    ) {
      return (
        <p className="text-danger text-center">
          Je pense que vous êtes un bot, je ne ferais pas parvenir votre mail,
          sorry ;-)
        </p>
      );
    } else if (this.state.form.token1 === "" && this.state.error.iError >= 0) {
      return (
        <div className="text-center">
          <p className="text-danger">
            {this.state.errorToken === "Pas de token..."
              ? " Hmmmmm.... C'est embarrassant... Si vous n'êtes pas un bot, appuyez sur le bouton qui vient d'apparaître juste en dessous. ;-)"
              : "Apparament le serveur n'est pas disponible... Sorry... :-( "}
          </p>
          <input
            type="button"
            className="btn btn-outline-info"
            onClick={this.refreshToken.bind(this, true)}
            value="Refresh"
            disabled={
              this.state.errorToken === "Serveur indisponible" ? true : false
            }
          />
        </div>
      );
    }
  };

  feedbackBackend = (isSuccess, typeError, statusError) => {
    // Fixe les variables :
    let backendMessage;
    let valueProgressBar = 10;

    // Etape 0: Création du message type
    // Fonction permettant de créer le message + la barre de progression
    const creatorBackendMessage = (
      whichType,
      messageProgressBar,
      valueProgressBar
    ) => {
      return (
        <Fragment>
          <p
            className={
              "text-center " +
              // Permet d'ajouter une couleur au texte danger vs success vs rien
              (whichType === "normal" ? "" : "text-" + whichType)
            }
          >
            {messageProgressBar}
          </p>
          <div
            className="progress"
            style={{ margin: "auto", width: "50%", height: "10px" }}
          >
            <div
              className={
                "progress-bar progress-bar-striped " +
                // Permet d'ajouter un background à la barre de progression bleu VS vert VS rouge
                (whichType === "normal"
                  ? "progress-bar-animated"
                  : "bg-" + whichType)
              }
              role="progressbar"
              style={{ width: valueProgressBar + "%" }}
              aria-valuenow={valueProgressBar}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </Fragment>
      );
    };

    // Etape 1: Affiche la barre de progression + MAJ par interval régulier
    // Fonction permettant d'animer la barre de progression
    const startProgress = () => {
      // Répète ce code à un interval régulier
      if (this.state.inProgress === true) {
        // Fais progresser la barre jusqu'à 70, step de 10
        valueProgressBar = valueProgressBar < 80 ? valueProgressBar + 10 : 10;

        // Actualise le paragraphe dans le state
        this.setState({
          backendMessage: creatorBackendMessage(
            "normal",
            "En cours de transmission",
            valueProgressBar
          ),
        });

        // Relance la fonction dans un interval de temps
        setTimeout(startProgress, 1500);
      }
    };

    // Etape 2: MAJ du message et de la barre en fonction de la requête
    // En cas d'échec pour la transmission du email
    if (isSuccess === false) {
      // J'arrête la progression
      this.setState({ inProgress: false }, () => {
        // Soit il s'agit d'une adresse mail non valide (MAJ du state)
        // Soit du token qui n'est pas conforme
        // Soit une autre erreur client - serveur
        let errorMessage = "";
        switch (typeError) {
          // S'il s'agit d'une erreur dans la boite mail, je mets à jour le state en conséquence
          case "adresse mail non valide":
            errorMessage = "Votre adresse mail n'est pas valide... :-(";
            this.setState({
              error: { ...this.state.error, email: true, iError: 1 },
            });

            break;

          // Dans ce cas, il s'agit soit
          case "unauthorized":
            errorMessage =
              "Pour des raisons de sécurité, le serveur a rejeté votre demande... :-(";
            break;

          default:
            if (statusError === 400) {
              errorMessage =
                "Pour des raisons de sécurité, le serveur a rejeté votre demande... Mais la deuxième fois sera la bonne ;-)";

              this.setState({
                form: { ...this.state.form, token2: typeError },
              });
            } else {
              errorMessage =
                "Oupss... Il y a un problème... Le message n'est pas parvenu...";
            }
        }

        // const errorMessage =
        //   typeError === "adresse mail non valide"
        //     ? "Votre adresse mail n'est pas valide... :-("
        //     : typeError === "Unauthorized"
        //     ? "Pour des raisons de sécurité, le serveur a rejeté votre demande... :-("
        //     : "Oupss... Il y a un problème... Le message n'est pas parvenu...";

        // S'il s'agit d'une erreur dans la boite mail, je mets à jour le state en conséquence

        typeError === "adresse mail non valide" &&
          this.setState({
            error: { ...this.state.error, email: true, iError: 1 },
          });

        // Je transmet le nouveau message :
        backendMessage = creatorBackendMessage("danger", errorMessage, "100");
      });

      // En cas de succès
    } else if (isSuccess) {
      // J'arrête la progression
      this.setState({ inProgress: false }, () => {
        // Je transmet le message de succès
        backendMessage = creatorBackendMessage(
          "success",
          "Le message a bien été transmis! ;-)",
          "100"
        );
      });

      // Si ni l'un ni l'autre, alors je mets en route la progression
    } else {
      this.setState({ inProgress: true }, () => startProgress());
    }

    this.setState({ backendMessage });
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
                  <FormContact
                    name="firstname"
                    label="Prénom"
                    placeholder="Votre prénom"
                    invalidFeed="Ce prénom existe vraiment ?"
                    stateError={this.state.error}
                    stateLockForm={this.state.lockForm}
                    handleChange={this.handleChange}
                    isRequired={true}
                  />

                  <FormContact
                    name="name"
                    label="Nom"
                    placeholder="Votre nom"
                    invalidFeed="Pas commun comme nom ..."
                    stateError={this.state.error}
                    stateLockForm={this.state.lockForm}
                    handleChange={this.handleChange}
                    isRequired={true}
                  />

                  <FormContact
                    name="email"
                    label="E-mail"
                    placeholder="Votre email"
                    invalidFeed="Erreur lors de la saisie de votre e-mail"
                    stateError={this.state.error}
                    stateLockForm={this.state.lockForm}
                    handleChange={this.handleChange}
                    isRequired={true}
                  />

                  <FormContact
                    name="tel"
                    label="Téléphone"
                    placeholder="Votre téléphone"
                    invalidFeed="Erreur lors de la saisie de votre téléphone"
                    stateError={this.state.error}
                    stateLockForm={this.state.lockForm}
                    handleChange={this.handleChange}
                    isRequired={false}
                  />

                  <FormContact
                    name="message"
                    label="Message"
                    placeholder="Votre message"
                    invalidFeed="Je n'ai pas bien capté votre message..."
                    stateError={this.state.error}
                    stateLockForm={this.state.lockForm}
                    handleChange={this.handleChange}
                    isRequired={true}
                  />
                  <div className="col-md-6 d-none">
                    <label htmlFor="token1">Token 1</label>

                    <input
                      id="token1"
                      type="text"
                      name="token1"
                      className="form-control inputFormBlue "
                      placeholder="Inscrivez la valeur du token1"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="col-md-12 font-weight-bold">
                    <p className="blue mt-2">
                      * Ces informations sont requises.
                    </p>
                    {this.feedbackMessage()}
                    {this.state.backendMessage}
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
