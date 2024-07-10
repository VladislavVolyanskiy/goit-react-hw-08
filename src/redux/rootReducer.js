import { authReducer } from "./auth/slice";
import { contactsReducer } from './contacts/slice'
import { filtersReducer } from "./filters/slice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['token']
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = {
  auth: persistedAuthReducer,
  contacts: contactsReducer,
  filter: filtersReducer,
};
