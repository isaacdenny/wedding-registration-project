import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loggedOut(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;
export default authSlice.reducer;
