import { NavLink } from "react-router-dom";
// import clsx from "clsx";
import "./AuthNav.css";

const AuthNav = () => {
  return (
    <div className="auth-nav">
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
};

export default AuthNav;
