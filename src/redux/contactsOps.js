import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66881e0b0bc7155dc01a83e3.mockapi.io/";
 
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const { data } = await axios("contacts");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contactData, thunkAPI) => {
  try {
    const { data } = await axios.post("contacts", contactData);
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
});

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
