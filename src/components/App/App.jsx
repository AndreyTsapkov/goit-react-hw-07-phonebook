import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getContact,
  getFilterWord,
  IsLoading,
} from 'redux/contacts/contactsSelectors';
import { RotatingLines } from 'react-loader-spinner';
import { contactsOperations } from 'redux/contacts';
import {
  AppContainer,
  AppTitle,
  AppMainTitle,
  AppSection,
  DesignDiv,
  Circle,
  Loader,
} from './App.styled';
import { Contacts } from '../Contacts';
import { ContactsForm } from '../ContactsForm';
import { ContactsFilter } from '../ContactsFilter';

//

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContact);

  const filterWord = useSelector(getFilterWord);

  const loading = useSelector(IsLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const getNormilizeContacts = () => {
    if (filterWord) {
      const normalizeFilter = filterWord.toLowerCase();

      if (contacts.length !== 0) {
        return contacts.filter(
          contact =>
            contact.name.toLowerCase().includes(normalizeFilter) ||
            contact.phone.includes(filterWord)
        );
      }
    }

    return contacts;
  };

  return (
    <AppContainer>
      <AppSection>
        <AppMainTitle>Phonebook</AppMainTitle>
        <ContactsForm></ContactsForm>
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
        {loading && (
          <Loader role="alert">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="100"
              visible={true}
            />
          </Loader>
        )}
        <ContactsFilter />
        {contacts.length !== 0 ? (
          <Contacts contacts={getNormilizeContacts()} />
        ) : null}
      </AppSection>
    </AppContainer>
  );
};

// return Notify.warning(`${contactObj.name} is already in contacts.`);
