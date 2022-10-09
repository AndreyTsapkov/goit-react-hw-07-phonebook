import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  removeContacts,
} from './contactsOperations';
import { filter } from './contactsActions';

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContacts.fulfilled]: (state, action) => [action.payload, ...state],
  [removeContacts.fulfilled]: (state, action) =>
    state.filter(item => item.id !== action.payload.id),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContacts.pending]: () => true,
  [addContacts.fulfilled]: () => false,
  [addContacts.rejected]: () => false,
  [removeContacts.pending]: () => true,
  [removeContacts.fulfilled]: () => false,
  [removeContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [addContacts.rejected]: (_, action) => action.payload,
  [addContacts.pending]: () => null,
  [removeContacts.rejected]: (_, action) => action.payload,
  [removeContacts.pending]: () => null,
});

const filterReducer = createReducer('', {
  [filter]: (_, action) => action.payload.toLowerCase(),
});

export { entities, isLoading, error, filterReducer };
