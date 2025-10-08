import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import PrivateRoutes from '../routes/PrivateRoutes';
import AddInfo from "../pages/AddInfo/AddInfo";
import DashboardLayout from "../layouts/DashboardLayout";
import MyInfo from "../pages/Dashboard/MyInfo/MyInfo";
import BeAMember from "../pages/Dashboard/BeAMember/BeAMember";

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
        },
        {
            path: "beAMember",
            element: <PrivateRoutes><BeAMember></BeAMember></PrivateRoutes>
        },
        {
            path: "addInfo",
            element: <PrivateRoutes><AddInfo></AddInfo></PrivateRoutes>
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
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children: [
      {
        path: "myInfo",
        Component: MyInfo
      }
    ]
  }
]);