import { useDeleteContactMutation } from 'redux/contactsApi';
import { PropTypes } from 'prop-types';
import {
  Contact,
  ContactsItem,
  ContactsList,
  ButtonDelete,
} from './Contacts.styled';

export const Contacts = ({ contacts }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <Contact>
              {name}: {number}
            </Contact>
            <ButtonDelete type="button" onClick={() => deleteContact(id)}>
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
