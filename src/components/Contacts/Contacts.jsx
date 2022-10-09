import { useDispatch } from 'react-redux';
import { deleteItem } from 'redux/contactSlice';
import { PropTypes } from 'prop-types';
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
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <Contact>
              {name}: {number}
            </Contact>
            <ButtonDelete
              type="button"
              onClick={() => dispatch(deleteItem(id))}
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
