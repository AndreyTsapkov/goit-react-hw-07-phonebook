import { useSelector, useDispatch } from 'react-redux';
import { addItem } from 'redux/contactSlice';
import { getContact, getFilterWord } from 'redux/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  AppContainer,
  AppTitle,
  AppMainTitle,
  AppSection,
  DesignDiv,
  Circle,
} from './App.styled';
import { Contacts } from './Contacts';
import { ContactsForm } from './ContactsForm';
import { ContactsFilter } from './ContactsFilter';

//

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContact);
  const filterWord = useSelector(getFilterWord);

  const addContact = contactObj => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === contactObj.name.toLowerCase()
      )
    ) {
      return Notify.warning(`${contactObj.name} is already in contacts.`);
    }

    dispatch(addItem(contactObj));
  };

  const getNormilizeContacts = () => {
    if (filterWord) {
      const normalizeFilter = filterWord.toLowerCase();

      if (contacts.length !== 0) {
        return contacts.filter(
          contact =>
            contact.name.toLowerCase().includes(normalizeFilter) ||
            contact.number.includes(filterWord)
        );
      }
    }

    return contacts;
  };

  return (
    <AppContainer>
      <AppSection>
        <AppMainTitle>Phonebook</AppMainTitle>
        <ContactsForm onSubmit={addContact}></ContactsForm>
        <DesignDiv>
          <Circle
            color="#f943fd"
            width="165px"
            height="165px"
            opacity="0.3"
            marginTop="50px"
            marginLeft="72px"
          ></Circle>
          <Circle
            color="#96e6ff"
            width="237px"
            height="237px"
            opacity="0.3"
            marginTop="231px"
            marginLeft="101px"
          ></Circle>
          <Circle
            color="#f943fd"
            width="205px"
            height="205px"
            opacity="0.2"
            marginTop="187px"
            marginLeft="390px"
          ></Circle>
        </DesignDiv>
      </AppSection>

      <AppSection>
        <AppTitle>Contacts</AppTitle>
        <ContactsFilter />
        {contacts.length !== 0 ? (
          <Contacts contacts={getNormilizeContacts()} />
        ) : null}
      </AppSection>
    </AppContainer>
  );
};
