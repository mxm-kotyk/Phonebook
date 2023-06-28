import { MainTitle, SecondaryTitle } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Helmet } from 'react-helmet-async';

function ContactsPage() {
  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactList />
    </>
  );
}

export default ContactsPage;
