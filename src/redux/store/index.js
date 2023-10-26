import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "../slices/getUsernameSlice";
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
  reducer: { users: usersReducer, username: usernameReducer },
  middleware: [persistenceLocalStorageMiddleware],
});
