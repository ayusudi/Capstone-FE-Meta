import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import HomePage from "./Components/Pages/HomePage";
import ReservationPage from "./Components/Pages/ReservationPage";
import ConfirmationPage from "./Components/Pages/ConfirmationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "reservation",
        element: <ReservationPage />,
      },
      {
        path: "confirmation",
        element: <ConfirmationPage />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); 