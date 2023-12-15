import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/Authentication/LoginPage.jsx";
import AccountPage from "./components/Authentication/AcountPage.jsx";
import DarkMode from "./components/dark-mode/DarkMode.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/index.js";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "login/create-account",
    element: <AccountPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </DarkMode>
  </React.StrictMode>
);
