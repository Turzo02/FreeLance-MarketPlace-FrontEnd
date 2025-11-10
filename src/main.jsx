import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Layout/Root.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import AllJobs from "./Pages/AllJobs/AllJobs.jsx";
import AddAJob from "./Pages/AddAJob/AddAJob.jsx";
import MyAcceptedTasks from "./Pages/MyAcceptedTasks/MyAcceptedTasks.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import JobDetails from "./Pages/JobDetails/JobDetails.jsx";


const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   children: [
    {
      index: true,
      Component: Home,
    },
    {
      path:"/login",
      Component:Login
    },
    {
      path:"/register",
      Component:Register
    },
    {
      path:"/allJobs",
      Component:AllJobs
    },
    {
      path:"/addAJob",
      Component:AddAJob
    },
    {
      path:"/acceptedTasks",
      Component:MyAcceptedTasks
    },
    {
      path:"/jobs/:id",
      loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`),
      Component:JobDetails
    },
    {
      path:"*",
      Component:NotFound

    }
   ]
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);