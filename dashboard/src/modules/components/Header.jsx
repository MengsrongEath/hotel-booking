import React from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../auth/core/action";
export const Header = () => {
  //   const {auth, logout } = useAuth();

  return (
    <nav className="navbar text-white">
      <div className="container py-2">
        <Link className="navbar-brand">
          <span className="fw-bold text-white"></span>
        </Link>
        <div className="dropdown">
          <span
            className="dropdown-toggle pointer"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
          >
            {auth ? auth.user.username : "Account"}
          </span>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <Link className="dropdown-item">Profile</Link>
            </li>
            <li>
              <button onClick={logout} className="dropdown-item">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
