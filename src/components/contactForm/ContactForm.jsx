import React, { useState } from "react";
import "./ContactForm.css";
import "../../../src/App.css";

const ContactForm = (props) => {
  const [state, setState] = useState({ ...props.contact });

  const onContactFormSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name: state.name,
      surname: state.surname,
      phone: state.phone,
    };
    if (!state.id) {
      props.onSave(newContact);
    } else {
      newContact.id = state.id;
      props.onEdit(newContact);
    }
  };

  const onChange = (e) => {
    const contact = { ...state, [e.target.name]: e.target.value };
    setState(contact);
  };

  return (
    <form action="" className="contact-form" onSubmit={onContactFormSubmit}>
      <label htmlFor="nameInput">Name</label>
      <input type="text" name="name" id="nameInput" value={state.name} onChange={onChange} />
      <label htmlFor="surnameInput">Surname</label>
      <input type="text" name="surname" id="surnameInput" value={state.surname} onChange={onChange} />
      <label htmlFor="phoneInput">Phone</label>
      <input type="text" name="phone" id="phoneInput" value={state.phone} onChange={onChange} />
      <div className="buttons">
        <button type="submit" className="pull-right">
          Save
        </button>
        <button type="button" className="pull-left" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
