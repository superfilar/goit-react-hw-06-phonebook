import style from './ContactForm.module.css';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../redux/selectors';
import { addContact } from 'components/redux/contactsSlice';

const nameInputId = nanoid();
const numberInputId = nanoid();

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

    return (
      <div className={style.contactform}>
        <form type="submit" onSubmit={handleSubmit}>
          <label htmlFor={nameInputId}>
            Name
            <input
              id='nameInputId'
              type="text"
              name="name"
              placeholder='Contact name'
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={handleChange}
              value={name}
              required
            />
          </label>
          <label htmlFor={numberInputId}>
            Number
            <input
              id='numberInputId'
              type="tel"
              name="number"
              placeholder='XXX-XX-XX'
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={handleChange}
              value={number}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }

export default ContactForm;
