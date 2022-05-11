import React from "react";
import useForm from "../Utils/UseForm";

function ContactMe() {
  const { handleFormSubmit, formError, contactForm, handleFormChange } =
    useForm();
  return (
    <div className="section">
      <div className="mySection ContactMe">
        <div className="section-div">
          <h2 className="section-label">Contact Me</h2>
          <h3>You Got A Problem That Needs Solving?</h3>
          <p>
            “Sometimes it pays to stay in bed on Monday, rather than spending
            the rest of the week debugging Monday’s code.” – Dan Salomon
          </p>
          <div className="contact-email">
            <i className="fa-solid fa-envelope"></i>
            <span>gahnseiwebdev@gmail.com</span>
          </div>
        </div>
        <form className="section-div" onSubmit={handleFormSubmit}>
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
          <button>Hit Me Up</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
