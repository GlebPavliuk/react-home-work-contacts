import React, { useState, useEffect } from "react";
import * as contactsService from "../../services/contactsService";
import ContactForm from "../contactForm/ContactForm";
import ContactsList from "../contactsList/ContactsList";
import "./Contacts.css";

const emptyContent = {
  name: "",
  surname: "",
  phone: "",
};

const Contacts = (props) => {
  const [selectedContact, setSelectedContact] = useState(emptyContent);
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState("list");

  useEffect(() => {
    contactsService.getContactsList().then((data) => {
      setContacts(data);
    });
  }, []);

  const onAddNewBtnClick = () => {
    setSelectedContact(emptyContent);
    setPage("form");
  };

  const onCancel = () => {
    setPage("list");
  };

  const onContactSelect = (contact) => {
    setSelectedContact(contact);
    setPage("form");
  };

  const onContactDelete = (contact) => {
    const myContacts = contacts.filter((el) => el !== contact);
    contactsService.deleteContact(contact.id);
    setContacts(myContacts);
    setSelectedContact(emptyContent);
  };

  const onSave = (contact) => {
    if (contact.id) {
      updateContact(contact);
    } else {
      createContact(contact);
    }
    setPage("list");
  };

  const createContact = (contact) => {
    contactsService.createContact(contact).then((data) => {
      const myContacts = [...contacts, data];
      setContacts(myContacts);
      setSelectedContact(data);
    });
  };

  const updateContact = (contact) => {
    contactsService.updateContact(contact).then((data) => {
      const myContacts = contacts.map((el) => (el.id === contact.id ? contact : el));
      setPage("list");
      setContacts(myContacts);
      setSelectedContact(contact);
    });
  };

  return (
    <div className="container">
      {page === "list" ? (
        <>
          <ContactsList contacts={contacts} onSelect={onContactSelect} onDelete={onContactDelete} />
          <button onClick={onAddNewBtnClick} className="add-new-contact-btn">
            Add new
          </button>
        </>
      ) : (
        <ContactForm contact={selectedContact} onCancel={onCancel} onSave={onSave} onEdit={updateContact} />
      )}
    </div>
  );
};

export default Contacts;
