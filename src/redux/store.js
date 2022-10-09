import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  filterReducer,
  entities,
  isLoading,
  error,
} from './contacts/contactsReducer';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const rootReducer = {
  contacts: combineReducers({
    entities,
    filter: filterReducer,
    isLoading,
  }),
  error,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
