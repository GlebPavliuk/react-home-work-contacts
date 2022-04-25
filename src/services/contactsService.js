import axios from "axios";

const URL = "https://612687da3ab4100017a68fd8.mockapi.io/contacts/";

export const getContactsList = () => axios.get(URL);

export const createContact = (contact) => axios.post(URL, contact);

export const updateContact = (contact) => axios.put(`${URL}${contact.id}`, contact);

export const deleteContact = (id) => axios.delete(URL + id);
