import { MainTitle, SecondaryTitle } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Container } from 'components/shared-styles/container';
import { Helmet } from 'react-helmet-async';

function ContactsPage() {
  return (
    <Container>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default ContactsPage;
