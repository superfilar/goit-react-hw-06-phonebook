import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onRemoveContact }) => {
  return(
  <ul>
    {contacts.map(contact => (
      <li key={contact.id} id={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          <button
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}>
            Delete
          </button>
        }
      </li>
    ))}
  </ul>)
  };

ContactList.propTypes = {
  contacts: PropTypes.object.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
