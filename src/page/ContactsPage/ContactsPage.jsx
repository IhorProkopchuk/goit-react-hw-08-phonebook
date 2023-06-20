import  ContactsList  from '../../components/ContactList/ContactList';
import  ContactForm  from '../../components/ContactForm/ContactForm';
import  Filter  from '../../components/Filter/Filter';

//import styles from './ContactsBook.styled';

const ContactsPage = () => {
  return (
    <>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactsPage;
