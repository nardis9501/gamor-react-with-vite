import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import Account from "./components/Acount.jsx";
import DarkMode from "./components/dark-mode/DarkMode.jsx";

const router = createBrowserRouter([
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
    element: <Account />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkMode>
      <RouterProvider router={router} />
    </DarkMode>
  </React.StrictMode>
);
