import { useState } from "react";

function useForm() {
  const [contactForm, setContactForm] = useState({
    name: ``,
    email: ``,
    message: ``
  });

  const [formError, setFormError] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormError({
      name: false,
      email: false,
      message: false
    });

    setContactForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let emailEror = false;
    let nameError = false;
    let messageError = false;

    if (!contactForm.name) {
      nameError = true;
    }

    if (!contactForm.email) {
      emailEror = true;
    }

    if (!contactForm.message) {
      messageError = true;
    }

    setFormError(() => ({
      name: nameError,
      email: emailEror,
      message: messageError
    }));

    if (nameError || emailEror || messageError) return;

    setContactForm({
      name: ``,
      email: ``,
      message: ``
    });
    alert(JSON.stringify(contactForm));
  };

  return { handleFormSubmit, formError, contactForm, handleFormChange };
}

export default useForm;
