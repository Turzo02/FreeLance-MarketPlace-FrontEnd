import React, { use, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, signOutUser,loading } = use(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
    document.documentElement.setAttribute("data-theme", savedTheme || "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

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
    {/* Public Links */}
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/allJobs">All Jobs</NavLink>
    </li>
    <li>
      <NavLink to="/how-it-works">How It Works</NavLink>
    </li>

    {/* Protected Links (Only show if user exists) */}
    {user && (
      <>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </>
    )}
  </>
);

if(loading){
  return <div className="glassmorphic-card sticky top-0 z-50 shadow-lg">

</div>

}

  return (
    <div className="glassmorphic-card sticky top-0 z-50 shadow-lg ">
      <div className="navbar section">
        <div className="navbar-start">
          {/* Drop down part for small screens */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col gap-2"
            >
              {/* Links */}
              {Links}

              {/* Profile info only on small screens */}
              {user && (
                <div className="flex items-center gap-2 border-t pt-2">
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-8 h-8 object-cover rounded-sm"
                  />
                  <span className="font-semibold">{user.displayName}</span>
                </div>
              )}
            </ul>
          </div>

          <a
            href="/"
            className="btn btn-ghost text-xl font-bold text-indigo-500"
          >
            ⚓FM
          </a>
        </div>

        {/* Center links for large screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>

      {/* Navbar-end */}
<div className="navbar-end flex items-center gap-2">
  {user ? (
    <div className="dropdown dropdown-end">
      {/* Avatar button */}
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-9 rounded-sm">
          <img
            src={user.photoURL || "https://api.dicebear.com/7.x/notionists/svg?seed=Data_User_006"}
            alt="Profile"
            referrerPolicy="no-referrer"
          />
        </div>
      </label>

      {/* Dropdown menu */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 p-2 shadow-sm border rounded-sm bg-base-100 w-52"
      >
        <li className="px-3 py-2 text-sm font-semibold cursor-default">
          {user.displayName}
        </li>
        <li className="border-t mt-1 pt-1">
          <button onClick={handleSignOut}>Logout</button>
        </li>
      </ul>
    </div>
  ) : (
    <>
      <Link to="/login">
        <button className="btn bg-indigo-500 text-white border-none">
          Login
        </button>
      </Link>

      <Link to="/register">
        <button className="btn bg-indigo-500 text-white border-none">
          Register
        </button>
      </Link>
    </>
  )}

  {/* Theme toggle */}
  <input
    onClick={toggleTheme}
    type="checkbox"
    defaultChecked
    className="toggle toggle-primary ml-2 border border-violet-500"
  />
</div>


      </div>
    </div>
  );
};

export default Navbar;
