import { Link } from "react-router-dom";

import "../App.css";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-link">
          <Link className="nav-list" to="/TaskPage">
            Task
          </Link>
          <Link className="nav-list" to="/register">
            Register
          </Link>
          <Link className="nav-list" to="/login">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};
