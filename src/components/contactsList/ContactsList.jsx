import React from "react";
import ContactsListItem from "../contactsListItem/ContactsListItem";
import "./ContactsList.css";

const ContactsList = (props) => {
  return (
    <ul className="contact-list">
      {props.contacts.map((contact) => (
        <ContactsListItem key={contact.id} contact={contact} onSelect={props.onSelect} onDelete={props.onDelete} />
      ))}
    </ul>
  );
};

export default ContactsList;
