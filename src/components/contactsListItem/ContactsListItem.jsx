import { Component } from "react";
import "./ContactsListItem.css";

class ContactsListItem extends Component {
  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }
  state = {};

  render() {
    const { contact } = this.props;
    return (
      <div className="contact-list-item">
        <li onClick={this.props.onSelect.bind(null, contact)}>
          {contact.name} {contact.surname} - {contact.phone}
        </li>
        <button onClick={this.onDeleteClick}>Delete</button>
      </div>
    );
  }

  onDeleteClick(e) {
    e.preventDefault();
    this.props.onDelete(this.props.contact);
  }
}

export default ContactsListItem;
