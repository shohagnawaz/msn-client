import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "about",
            Component: About
        },
        {
            path: "contact",
            Component: Contact
        }
    ]
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
          path: "login",
          Component: Login
      },
      {
          path: "register",
          Component: Register
      }
    ]
  }
]);