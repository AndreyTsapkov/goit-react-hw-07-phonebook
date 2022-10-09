import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from './contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return error.message;
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, phone: number }) => {
    try {
      const contacts = await contactsApi.addContacts({ name, phone: number });
      return contacts;
    } catch (error) {
      return error.message;
    }
  }
);

export const removeContacts = createAsyncThunk(
  'contacts/removeContacts',
  async id => {
    try {
      const contacts = await contactsApi.removeContacts(id);
      return contacts;
    } catch (error) {
      return error.message;
    }
  }
);
