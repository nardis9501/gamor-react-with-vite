import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};
export const getUserDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      const username = action.payload;
      console.log(username);
      state.username = username;
    },
  },
});

export const { getUserData } = getUserDataSlice.actions;
export default getUserDataSlice.reducer;
