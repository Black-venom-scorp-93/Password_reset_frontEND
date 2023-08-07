import React from "react";
import { Outlet } from "react-router";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid ">
            <Link to="/" className="nav-link">
              <h1>User_Aunthetication_Home</h1>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto ">
                <NavLink
                  aria-current="page"
                  to="/login"
                  className={(navData) =>
                    navData.isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <button>Login</button>
                </NavLink>
                <NavLink
                  to="/register"
                  className={(navData) =>
                    navData.isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <button>Register</button>
                </NavLink>
                <NavLink
                  to="/forgotPassword"
                  className={(navData) =>
                    navData.isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <button>ForgotPassword</button>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;