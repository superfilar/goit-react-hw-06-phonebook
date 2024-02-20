import { getContacts } from './redux/selectors';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {

const contacts = useSelector(getContacts);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm/>
      <h1>Contacts</h1>
      {contacts.length > 0 ? (
        <Filter/>
      ) : (
        <h3>There is no contacts!<br/> Add contacts through form above.</h3>
      )}
      {contacts.length > 0 && (
        <ContactList/>
      )}
    </div>
  );
};

export default App;
