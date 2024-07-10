import { selectValue } from "../../redux/filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

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
