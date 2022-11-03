import { FilterTitle, InputFilter, LabelFilter } from './ContactsFilter.styled';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/contacts/contactsActions';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  return (
    <LabelFilter>
      <FilterTitle>Find contacts by name or number</FilterTitle>
      <InputFilter
        type="text"
        onChange={event => dispatch(filter(event.currentTarget.value))}
      ></InputFilter>
    </LabelFilter>
  );
};
