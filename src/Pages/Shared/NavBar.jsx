import React, { useContext } from "react";
import { NavLink } from "react-router";
import AuthContext from "../../Context/AuthContext";
import {
  sweetErrorMessage,
  sweetSuccessMessage,
} from "../../Utilities/sweetAlertFN";

const NavBar = () => {
  const { currentUser, signOutUser, setLoading } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        setLoading(false);
        sweetSuccessMessage("You have successFully log out");
      })
      .catch((error) => {
        const errorMessage = error.massage;
        sweetErrorMessage(errorMessage);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {/* for applicant links,check roles as well */}
      {currentUser && (
        <li>
          <NavLink to="/myApplications">My Applications</NavLink>
        </li>
      )}

      {/* fro recruiter, check role as well */}

      {currentUser && (
        <>
          <li>
            <NavLink to="/addJob">AddJob</NavLink>
          </li>
          <li>
            <NavLink to="/myPostedJobs">My posted Jobs</NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );

  const logInRegister = (
    <>
      <NavLink className="btn" to="/logIn">
        LogIn
      </NavLink>
      <NavLink className="btn" to="/register">
        Register
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {currentUser ? (
          <button onClick={handleSignOut} className="btn btn-primary">
            Sign Out
          </button>
        ) : (
          logInRegister
        )}
      </div>
    </div>
  );
};

export default NavBar;
