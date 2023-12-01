import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home.tsx";
import AddBill from "./screens/AddBill.tsx";
import Profile from "./screens/Profile.tsx";
import EditProfile from "./screens/EditProfile.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "addBill",
    element: <AddBill />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "profile/edit",
    element: <EditProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
