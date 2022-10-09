import axios from 'axios';

axios.defaults.baseURL = 'https://6342a1aaba4478d4783f056e.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};
