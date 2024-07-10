import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "items",
  storage,
};
const persistedContactReducer = persistReducer(persistConfig, contactsReducer);

export const rootReducer = {
  contacts: persistedContactReducer,
  filter: filtersReducer,
};
