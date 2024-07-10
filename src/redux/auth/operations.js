import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  delete axios.defaults.headers.common["Authorization"];
};


export const register = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('users/signup', userData)
            setAuthHeader(data.token);
            return data
        } catch (error) {
        return rejectWithValue(error.message)
        }
        
  });

export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post("users/login", userData);
        setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
        await axios.post("users/logout");
        clearAuthHeader();
    } catch (error) {
        return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
if(!auth.token) {
return rejectWithValue('no token');
}
      setAuthHeader(auth.token);
      const { data } = await axios.get("users/current");
      return data;
    } catch (error) {
    
      return rejectWithValue(error.message);
    }
  },
  
);




