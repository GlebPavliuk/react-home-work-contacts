import React, { Component } from "react";
import ContactsListItem from "../contactsListItem/ContactsListItem";
import "./ContactsList.css";

class ContactsList extends Component {
  render() {
    return (
      <ul className="contact-list">
        {this.props.contacts.map((contact) => (
          <ContactsListItem
            key={contact.id}
            contact={contact}
            onSelect={this.props.onSelect}
            onDelete={this.props.onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default ContactsList;
