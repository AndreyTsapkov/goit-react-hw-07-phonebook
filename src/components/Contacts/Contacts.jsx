import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { contactsOperations } from 'redux/contacts';
import {
  Contact,
  ContactsItem,
  ContactsList,
  ButtonDelete,
} from './Contacts.styled';

export const Contacts = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ContactsList>
      {contacts.map(({ id, name, phone }) => {
        return (
          <ContactsItem key={id}>
            <Contact>
              {name}: {phone}
            </Contact>
            <ButtonDelete
              type="button"
              onClick={() => dispatch(contactsOperations.removeContacts(id))}
            >
              Delete
            </ButtonDelete>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
};
