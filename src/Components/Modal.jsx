import React from "react";

function Modal(props) {
  const { handleModal } = props;

  return (
    <div className="modal-container">
      <div className="modal">
        <i className="fa-solid fa-paper-plane"></i>
        <span className="modal-label">Message Sent!</span>
        <span className="modal-message">
          Thank you for reaching out, I will get back to you as soon as
          possible.
        </span>
        <button className="modal-button" onClick={handleModal.closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
