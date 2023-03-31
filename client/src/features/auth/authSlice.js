import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: null,
  exp: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.exp = action.payload.exp;
    },
    loggedOut(state) {
      state.user = null;
      state.token = null;
      state.exp = null;
    },
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;
export default authSlice.reducer;
