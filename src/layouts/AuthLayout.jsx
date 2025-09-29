import { Outlet } from "react-router";
// import login image
import loginImage from "../assets/authentication/login.jpg";
import MsnLogo from "../pages/shared/MsnLogo/MsnLogo";

const AuthLayout = () => {
  return (
    <div className="p-12 bg-base-200">
        <div>
            <MsnLogo></MsnLogo>
        </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
            <img src={loginImage} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1">
            <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
