import { useState } from 'react';
import { getContact } from 'redux/contacts/contactsSelectors';
import { contactsOperations } from 'redux/contacts';
import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonSubmit,
  Form,
  Input,
  InputTitle,
  Label,
} from './ContactsForm.styled';
import { Notify } from 'notiflix';

//

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = { name, phone: number };

    if (contacts.find(contact => contact.name === name)) {
      return Notify.warning(`${name} is already in contacts.`);
    } else {
      dispatch(contactsOperations.addContacts(newContact));
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    name === 'name' ? setName(value) : setNumber(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <InputTitle>Name</InputTitle>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleInputChange}
          required
        />
      </Label>
      <Label>
        <InputTitle>Number</InputTitle>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleInputChange}
          required
        />
      </Label>

      <ButtonSubmit>Add contact</ButtonSubmit>
    </Form>
  );
};
