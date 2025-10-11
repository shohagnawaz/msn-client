import { NavLink, Outlet } from "react-router";
import MsnLogo from "../pages/shared/MsnLogo/MsnLogo";
import { FaHome, FaUserClock, FaUsers, FaUserShield } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import useUserRole from "../hooks/useUserRole";

const DashboardLayout = () => {
  const { role, roleLoading } = useUserRole();
  console.log(role);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
        </div>

        {/* Page content here */}
        <Outlet></Outlet>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <MsnLogo></MsnLogo>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myInfo"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-lg transition-colors duration-200 ${
                  isActive ? "bg-primary text-white" : "hover:bg-base-200"
                }`
              }
            >
              <FaCircleInfo />
              My Info
            </NavLink>
          </li>

          {/* admin route */}
          { !roleLoading && role === "admin" &&
            <>
              <li>
                <NavLink
                  to="/dashboard/makeAdmin"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-lg transition-colors duration-200 ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaUserShield size={18} />
                  <span>Make Admin</span>
                </NavLink>
              </li>

              {/* members link */}
              <li>
                <NavLink
                  to="/dashboard/activeMembers"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-lg transition-colors duration-200 ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaUsers /> Active Members
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/pendingMembers"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-lg transition-colors duration-200 ${
                      isActive ? "bg-primary text-white" : "hover:bg-base-200"
                    }`
                  }
                >
                  <FaUserClock /> Pending Members
                </NavLink>
              </li>
            </>
          }
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
