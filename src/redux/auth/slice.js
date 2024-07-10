import { createSlice } from "@reduxjs/toolkit";
import { login, register, logout, refreshUser } from "./operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email:null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => {
      builder.addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      });

      builder.addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      });

      builder.addCase(logout.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      });

      builder
        .addCase(refreshUser.fulfilled, (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
        })
        .addCase(refreshUser.rejected, (state) => {
          state.user = {
            name: null,
            email: null,
          };
          state.token = null;
          state.isLoggedIn = false;
        });
    }
})


export const authReducer = authSlice.reducer