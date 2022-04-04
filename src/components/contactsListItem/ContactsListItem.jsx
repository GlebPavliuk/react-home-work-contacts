import React from "react";
import "./ContactsListItem.css";

const ContactsListItem = (props) => {
  const { contact } = props;

  const onDeleteClick = (e) => {
    e.preventDefault();
    props.onDelete(props.contact);
  };

  return (
    <div className="contact-list-item">
      <li onClick={props.onSelect.bind(null, contact)}>
        {contact.name} {contact.surname} - {contact.phone}
      </li>
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
};

export default ContactsListItem;
