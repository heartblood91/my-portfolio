import React from "react";

const formValidate = (event) => {
  event.preventDefault();
  console.log("ok c'est cool");
};

const Contact = (props) => {
  return (
    <section id="education">
      <div className="container">
        <div className="blue-divider"></div>
        <div className="heading shadow-blue text-uppercase text-center mb-4">
          <h2>Contactez-moi</h2>
        </div>

        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 mx-auto">
            <form id="contact-form" onSubmit={formValidate}>
              {/* method="post" action="" */}
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="firstname">
                    Prénom <span className="blue">*</span>
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    className="form-control inputFormBlue"
                    placeholder="Votre prénom"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="name">
                    Nom <span className="blue">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-control inputFormBlue"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email">
                    Email <span className="blue">*</span>
                  </label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className="form-control inputFormBlue"
                    placeholder="Votre email"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="form-control inputFormBlue"
                    placeholder="Votre téléphone"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message">
                    Message <span className="blue">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control inputFormBlue"
                    placeholder="Votre message"
                    rows="4"
                  ></textarea>
                  <div className="invalid-feedback">
                    Entrez un nombre compris entre 0 et 50.
                  </div>
                </div>
                <div className="col-md-12">
                  <p className="blue">
                    <strong>* Ces informations sont requises.</strong>
                  </p>
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

    // <div className="container">
    // <div className="divider"></div>
    // <div className="heading">
    //     <h2>Contactez-moi</h2>
    // </div>

    // <div className="row">
    //    <div className="col-lg-10 col-lg-offset-1">
    //         <form id="contact-form" method="post" action="" role="form">
    //             <div className="row">
    //                 <div className="col-md-6">
    //                     <label htmlFor="firstname">Prénom <span className="blue">*</span></label>
    //                     <input id="firstname" type="text" name="firstname" className="form-control" placeholder="Votre prénom">
    //                     <p className="comments"></p>
    //                 </div>
    //                 <div className="col-md-6">
    //                     <label htmlFor="name">Nom <span className="blue">*</span></label>
    //                     <input id="name" type="text" name="name" className="form-control" placeholder="Votre Nom">
    //                     <p className="comments"></p>
    //                 </div>
    //                 <div className="col-md-6">
    //                     <label htmlFor="email">Email <span className="blue">*</span></label>
    //                     <input id="email" type="text" name="email" className="form-control" placeholder="Votre Email">
    //                     <p className="comments"></p>
    //                 </div>
    //                 <div className="col-md-6">
    //                     <label htmlFor="phone">Téléphone</label>
    //                     <input id="phone" type="tel" name="phone" className="form-control" placeholder="Votre Téléphone">
    //                     <p className="comments"></p>
    //                 </div>
    //                 <div className="col-md-12">
    //                     <label htmlFor="message">Message <span className="blue">*</span></label>
    //                     <textarea id="message" name="message" className="form-control" placeholder="Votre Message" rows="4"></textarea>
    //                     <p className="comments"></p>
    //                 </div>
    //                 <div className="col-md-12">
    //                     <p className="blue"><strong>* Ces informations sont requises.</strong></p>
    //                 </div>
    //                 <div className="col-md-12">
    //                     <input type="submit" className="button1" value="Envoyer">
    //                 </div>
    //             </div>
    //         </form>
    //     </div>
    // </div>
    // </div>
  );
};

export default Contact;
