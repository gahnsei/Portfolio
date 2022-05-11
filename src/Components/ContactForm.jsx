import React from "react";
import useForm from "../Utils/useForm";

function ContactForm(props) {
  const {
    handleFormSubmit,
    formError,
    contactForm,
    handleFormChange,
    loading
  } = useForm();

  const { openModal } = props;

  const submit = (event) => {
    handleFormSubmit(event, openModal);
  };

  return (
    <form className="section-div" onSubmit={submit}>
      <div className="input-div">
        <label className="email-label" for="name">
          NAME
          {formError.name && <span>Name Cannot Be Empty</span>}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={contactForm.name}
          onChange={handleFormChange}
        />
      </div>
      <div className="input-div">
        <label className="email-label" for="email">
          EMAIL
          {formError.email && <span>Email Cannot Be Empty</span>}
        </label>
        <input
          id="email"
          type="text"
          name="email"
          value={contactForm.email}
          onChange={handleFormChange}
        />
      </div>
      <div className="input-div">
        <label className="email-label">
          MESSAGE
          {formError.message && <span>Message Cannot Be Empty</span>}
        </label>
        <textarea
          type="text"
          className="email-message"
          name="message"
          value={contactForm.message}
          onChange={handleFormChange}
        />
      </div>
      {loading ? (
        <i className="fa-solid fa-spinner loading"></i>
      ) : (
        <button className="contact-button">Hit Me Up</button>
      )}
    </form>
  );
}

export default ContactForm;
