import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
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

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const contactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addItem, deleteItem, filterItems } = contactSlice.actions;
