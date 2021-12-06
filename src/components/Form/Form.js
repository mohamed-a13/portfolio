/*******************FORM*******************/

import React from "react";
import "./Form.css";
import { withFormik } from "formik";
import * as Yup from "yup";
import sendEmail from "./sendEmail.png";

const Form = (props) => {
  return (
    <>
      <div id="contact" className="container-fluid formContainer">
        <div className="row d-flex justify-content-center">
          <div className="colLeft d-none d-lg-block col-lg-4 col-xl-4 pr-5">
            <img
              className="img-fluid"
              src={sendEmail}
              alt="illustration de personnage envoyant un mail"
            />
          </div>
          <div className="colRight col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <form action="" className="contact-form">
              <h2>Contactez-moi</h2>

              <div className="form-content">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="NOM*"
                  autoComplete="off"
                  value={props.values.name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  style={{ padding: props.errors.name && "0", height: "27px" }}
                />
                {props.touched.name && props.errors.name && (
                  <span
                    style={{
                      color: "red",
                      marginLeft: "2rem",
                      fontSize: "1rem",
                    }}
                  >
                    {props.errors.name}
                  </span>
                )}

                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="SOCIETE*"
                  autoComplete="off"
                  value={props.values.company}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  style={{
                    padding: props.errors.company && "0",
                    height: "27px",
                  }}
                />
                {props.touched.company && props.errors.company && (
                  <span
                    style={{
                      color: "red",
                      marginLeft: "2rem",
                      fontSize: "1rem",
                    }}
                  >
                    {props.errors.company}
                  </span>
                )}

                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="TELEPHONE*"
                  autoComplete="off"
                  value={props.values.phone}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  style={{
                    padding: props.errors.phone && "0",
                    height: "27px",
                  }}
                />
                {props.touched.phone && props.errors.phone && (
                  <span
                    style={{
                      color: "red",
                      marginLeft: "2rem",
                      fontSize: "1rem",
                      padding: "0",
                    }}
                  >
                    {props.errors.phone}
                  </span>
                )}

                <label id="not-mail">Email non valide</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="EMAIL*"
                  autoComplete="off"
                  value={props.values.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  style={{ padding: props.errors.email && "0", height: "27px" }}
                />
                {props.touched.email && props.errors.email && (
                  <span
                    style={{
                      color: "red",
                      marginLeft: "2rem",
                      fontSize: "1rem",
                    }}
                  >
                    {props.errors.email}
                  </span>
                )}

                <textarea
                  id="message"
                  name="message"
                  placeholder="MESSAGE*"
                  autoComplete="off"
                  value={props.values.message}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  style={{ padding: props.errors.message && "0" }}
                />
                {props.touched.message && props.errors.message && (
                  <span
                    style={{
                      color: "red",
                      marginLeft: "2rem",
                      fontSize: "1rem",
                    }}
                  >
                    {props.errors.message}
                  </span>
                )}
              </div>
              <input
                className="button"
                type="submit"
                value="Envoyer"
                onClick={props.handleSubmit}
              />
              <div className="form-message"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Le nom doit comporter plus de 3 caractères !")
      .max(15, "Le nom doit comporter moins de 15 caractères !")
      .required("Le nom est obligatoire !")
      .matches(/^[aA-zZ\s]+$/, "Le format de votre nom n'est pas correct !"),
    company: Yup.string()
      .min(3, "Le nom de l'entreprise doit comporter plus de 3 caractères !")
      .max(15, "Le nom de l'entreprise doit comporter moins de 15 caractères !")
      .required("Le nom de l'entreprise est obligatoire !")
      .matches(/^[aA-zZ\s]+$/, "Le format de votre nom n'est pas correct !"),
    email: Yup.string()
      .email("L'adresse mail n'est pas valide !")
      .max(100, "L'adresse mail doit comorter moins de 100 caractères !")
      .required("L'adresse mail est obligatoire !"),
    phone: Yup.string()
      .required("Le numéro de téléphone est obligatoire !")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Le numero de téléphone n'est pas valide"
      ),
    message: Yup.string()
      .matches(
        /^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._,\s-]{50,200}$/,
        "Le message doit comporter entre 50 et 200 caractères"
      )
      .required("Le message est obligatoire !")
      .min(50, "Le message doit comporter plus de 50 caractères !")
      .max(200, "Le message doit comporter moins de 200 caractères !"),
  }),

  handleSubmit: (values, { props, resetForm }) => {
    const successMsg = () => {
      let formMess = document.querySelector(".form-message");
      formMess.innerHTML = "Le formulaire a bien été envoyé";
      formMess.style.opacity = "1";
      formMess.style.background = "#68a063";
      setTimeout(() => {
        successMsg("");
        formMess.innerHTML = "";
        formMess.style.opacity = "0";
      }, 5000);
    };

    const { name, company, phone, email, message } = values;

    const sendFeedback = (templateId, variables) => {
      window.emailjs
        .send("service_ji1wbml", templateId, variables)
        .then((res) => {
          successMsg();
          resetForm();
        })
        .catch((err) => {
          document.querySelector(".form-message").innerHTML =
            "Une erreur s'est produite.";
        });
    };

    sendFeedback("template_ruc5btk", {
      name,
      company,
      phone,
      email,
      message,
    });
  },
})(Form);
