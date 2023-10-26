import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};
export const getUsernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    addUsername: (state, action) => {
      const username = action.payload;
      console.log(username);
      state.username = username;
    },
  },
});

export const { addUsername } = getUsernameSlice.actions;
export default getUsernameSlice.reducer;
