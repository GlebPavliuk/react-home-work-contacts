import React, { Component } from "react";
import "./ContactForm.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.contact,
    };
    this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
    this.onContactFormSubmit = this.onContactFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onDeleteBtnClick() {
    this.props.onDelete(this.props.contact);
  }

  onContactFormSubmit(e) {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      surname: this.state.surname,
      phone: this.state.phone,
    };
    if (!this.state.id) {
      this.props.onSave(newContact);
    } else {
      newContact.id = this.state.id;
      this.props.onEdit(newContact);
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form action="" className="contact-form" onSubmit={this.onContactFormSubmit}>
        <label htmlFor="nameInput">Name</label>
        <input type="text" name="name" id="nameInput" value={this.state.name} onChange={this.onChange} />
        <label htmlFor="surnameInput">Surname</label>
        <input type="text" name="surname" id="surnameInput" value={this.state.surname} onChange={this.onChange} />
        <label htmlFor="phoneInput">Phone</label>
        <input type="text" name="phone" id="phoneInput" value={this.state.phone} onChange={this.onChange} />
        <div className="buttons">
          <button type="submit" className="pull-right">
            Save
          </button>
          <button type="button" className="pull-left" onClick={this.props.onCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
