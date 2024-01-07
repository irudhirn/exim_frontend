import { createSlice } from "@reduxjs/toolkit";

const isLoggedInSlice = createSlice({
  name: "isLoggedIn",
  initialState: { isLoggedIn: false, userID: "" },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userID = action.payload.userID;
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.userID = "";
    }
  }
});

export const isLoggedInActions = isLoggedInSlice.actions;

export default isLoggedInSlice;