import { FilterTitle, InputFilter, LabelFilter } from './ContactsFilter.styled';
import { useDispatch } from 'react-redux';
import { filterItems } from 'redux/contacts/contactsSlice';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  return (
    <LabelFilter>
      <FilterTitle>Find contacts by name or number</FilterTitle>
      <InputFilter
        type="text"
        onChange={event => dispatch(filterItems(event.currentTarget.value))}
      ></InputFilter>
    </LabelFilter>
  );
};
