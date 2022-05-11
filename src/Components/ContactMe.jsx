import React from "react";
import { useState } from "react";
import ContactForm from "./ContactForm";
import Modal from "./Modal";

function ContactMe() {
  const [modal, setModal] = useState(false);

  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);

  const handleModal = {
    modal,
    closeModal,
    openModal
  };

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
        <ContactForm openModal={openModal} />
        {modal && <Modal handleModal={handleModal} />}
      </div>
    </div>
  );
}

export default ContactMe;
