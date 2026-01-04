// DashboardLayout.jsx
import { NavLink, Outlet } from "react-router-dom";
import { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
    const { user } = use(AuthContext);
  

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-md border transition
     ${
       isActive
         ? "text-white bg-indigo-500"
         : "text-gray-400 border-transparent hover:border-indigo-500 hover:text-indigo-500"
     }`;

  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row ">
      
      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-indigo-500">
        <h1 className="text-indigo-500 font-semibold">Dashboard</h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-indigo-500"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`md:w-48 w-full md:block ${
          open ? "block" : "hidden"
        } border-r border-indigo-500 py-4`}
      >
        <nav className="space-y-2">
          <NavLink to="/dashboard/profile" className={linkClass}>
            Profile
          </NavLink>

          <NavLink to={`/dashboard/myaddedjobs/${user?.email}`} className={linkClass}>
            My Added Jobs
          </NavLink>

          <NavLink to="/dashboard/addAJob" className={linkClass}>
            Add a Job
          </NavLink>

          <NavLink to="/dashboard/acceptedTasks" className={linkClass}>
            My Accepted Task
          </NavLink>
          <NavLink to="/dashboard/analytics" className={linkClass}>
            Analytics
          </NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
