import { Link, NavLink } from "react-router";
import MsnLogo from "../MsnLogo/MsnLogo";
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const { user } = useAuth();
    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/addInfo">Add Info</NavLink></li>
        {
          user && <>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          </>
        }
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            { navItems }
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">
            <MsnLogo></MsnLogo>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          { navItems }
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-primary" to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
