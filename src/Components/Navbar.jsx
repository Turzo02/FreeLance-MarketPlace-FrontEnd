import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);
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

  if (loading) {
    return <div className="z-50 shadow-lg">loading.......</div>;
  }

  return (
  <div className="sticky top-0 z-50 shadow-lg">
  <div className="mx-auto max-w-7xl flex items-center justify-between px-4 h-16">
    {/* Left */}
    <div className="flex items-center gap-2">
      {/* Mobile dropdown */}
      <div className="relative lg:hidden">
        <button
          tabIndex={0}
          className="inline-flex items-center justify-center p-2 rounded"
        >
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
        </button>

        <ul
          tabIndex={-1}
          className="absolute left-0 mt-3 w-52 rounded shadow p-2 flex flex-col gap-2"
        >
          {Links}

          {user && (
            <div className="flex items-center gap-2 border-t pt-2">
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-8 h-8 object-cover rounded-sm"
              />
              <span className="font-semibold">
                {user.displayName}
              </span>
            </div>
          )}
        </ul>
      </div>

      <a href="/" className="text-xl font-bold">
        ⚓FM
      </a>
    </div>

    {/* Center links */}
    <div className="hidden lg:flex">
      <ul className="flex items-center gap-4">
        {Links}
      </ul>
    </div>

    {/* Right */}
    <div className="flex items-center gap-2">
      {user ? (
        <div className="relative">
          <button
            tabIndex={0}
            className="flex items-center justify-center w-9 h-9 rounded-sm"
          >
            <img
              src={
                user.photoURL ||
                "https://api.dicebear.com/7.x/notionists/svg?seed=Data_User_006"
              }
              alt="Profile"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-sm"
            />
          </button>

          <ul
            tabIndex={0}
            className="absolute right-0 mt-3 w-52 rounded-sm border shadow-sm p-2"
          >
            <li className="px-3 py-2 text-sm font-semibold cursor-default">
              {user.displayName}
            </li>
            <li className="border-t mt-1 pt-1">
              <button
                onClick={handleSignOut}
                className="w-full text-left px-3 py-2"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <Link to="/login">
            <button className="px-4 py-2 rounded border">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="px-4 py-2 rounded border">
              Register
            </button>
          </Link>
        </>
      )}
    </div>
  </div>
</div>

  );
};

export default Navbar;
