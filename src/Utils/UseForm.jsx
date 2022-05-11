import { useState } from "react";
import axios from "axios";

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

    axios.post(
      `https://public.herotofu.com/v1/56996790-d16c-11ec-a821-6590c8b23a22`,
      { ...contactForm }
    );
  };

  return { handleFormSubmit, formError, contactForm, handleFormChange };
}

export default useForm;
