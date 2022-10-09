import { useState } from 'react';
import {
  ButtonSubmit,
  Form,
  Input,
  InputTitle,
  Label,
} from './ContactsForm.styled';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import {
  useGetContactsQuery,
  useCreateContactMutation,
} from 'redux/contactsApi';

//

// const initialValues = {
//   name: '',
//   number: '',
// };

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const contactObj = (name, number) => {
    return {
      id: nanoid(),
      name,
      number,
    };
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = contactObj(name, number);

    const findContact = contacts.find(
      contact => contact.name.toLowerCase() === name
    );

    findContact
      ? Notify.warning(`${name} is already in contacts.`)
      : createContact(newContact);
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
