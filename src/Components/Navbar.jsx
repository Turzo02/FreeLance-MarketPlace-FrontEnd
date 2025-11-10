import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Signed out successfully!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/login");
        });
      })
      .catch((error) => console.error(error));
  };
  const Links = (
    <>
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/allJobs"> All Jobs </NavLink>
      </li>
      <li>
        <NavLink to="/addAJob"> Add a Job </NavLink>
      </li>
      <li>
        <NavLink to="/acceptedTasks"> My Accepted Tasks </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100">
      <div className="navbar  section">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">⚓FM</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
                    <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2 group cursor-pointer">
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                                    {user?.displayName}
                                </span>
                                <img
                                    src={user?.photoURL}
                                    alt="Profile"
                                    className="w-8 h-8 object-cover rounded-full"
                                />
                            </div>
                            <button onClick={handleSignOut} className="btn">
                                Logout
                            </button>
                        </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
