import axios from 'axios';

axios.defaults.baseURL = 'https://6342a1aaba4478d4783f056e.mockapi.io/';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  console.log(data);
  return data;
};

export const addContacts = async ({ name, phone: number }) => {
  const { data } = await axios.post(`/contacts/`, {
    name,
    phone: number,
  });
  return data;
};

export const removeContacts = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
