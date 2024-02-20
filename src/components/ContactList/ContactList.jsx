import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../redux/selectors';
import { removeContact } from '../redux/contactsSlice';

const ContactList = () => {

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact());
  
  return(
  <ul>
    {contacts.map(contact => (
      <li key={contact.id} id={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          <button
            type="button"
            name="delete"
            onClick={handleDelete}>
            Delete
          </button>
        }
      </li>
    ))}
  </ul>)
  };

export default ContactList;
