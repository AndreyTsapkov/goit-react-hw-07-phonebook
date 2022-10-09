import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filterWord: '',
  },
  reducers: {
    addItem(state, action) {
      state.items = [action.payload, ...state.items];
    },
    deleteItem(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    filterItems(state, action) {
      state.filterWord = action.payload;
    },
  },
});

export const { addItem, deleteItem, filterItems } = contactsSlice.actions;

export default contactsSlice.reducer;
