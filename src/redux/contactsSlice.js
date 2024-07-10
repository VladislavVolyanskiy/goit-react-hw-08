import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";
import { selectValue } from "./filtersSlice";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.error = false;
        // console.dir(payload);
        state.items = payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });

    builder
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.error = false;
        state.items = state.items.filter((el) => el.id !== payload.id);
        state.loading = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
    
    builder
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.error = false;
        state.items.push(payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const selectItems = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectItems, selectValue],
  (items, name) => {
    return items?.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
  }
);
