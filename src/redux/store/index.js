import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "../slices/getUserDataSlice";
import usersReducer from "../slices/getUsersSlice";

const persistenceLocalStorageMiddleware = (store) => (next) => (action) => {
  console.log(store.getState().users);
  console.log(action);
  next(action);
  console.log(store.getState());

  localStorage.setItem(
    "redux_state_users_persitanceLocalSotarage",
    JSON.stringify(store.getState())
  );
};
export const store = configureStore({
  reducer: { users: usersReducer, userData: userDataReducer },
  middleware: [persistenceLocalStorageMiddleware],
});
