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
import MyAddedJobs from "./Pages/MyAddedJobs/MyAddedJobs.jsx";
import UpdateJob from "./Pages/UpdateJob/UpdateJob.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner.jsx";
import HowITWorks from "./Pages/HowITWorks/HowITWorks";
import About from "./Pages/AdditionalPages/About.jsx";
import Privacy from "./Pages/AdditionalPages/Privacy.jsx";
import FAQ from "./Pages/AdditionalPages/FAQ.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Profile from "./Pages/Dashboard/Profile.jsx";
import Analytics from "./Pages/Dashboard/Analytics.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            index: true,
            element: <Profile></Profile>,
          },
          {
            path: "profile",
            element: <Profile></Profile>,
          },
          {
            path: "analytics",
            element:<Analytics></Analytics>,
          },
          {
            path: "addAJob",
            element: (
              <PrivateRoute>
                <AddAJob></AddAJob>
              </PrivateRoute>
            ),
          },
          {
            path: "acceptedTasks",
            element: (
              <PrivateRoute>
                <MyAcceptedTasks></MyAcceptedTasks>
              </PrivateRoute>
            ),
          },
          {
            path: "myaddedjobs/:email",
            loader: ({ params }) =>
              fetch(
                `https://freelance-marketplace-api-server-smoky.vercel.app/jobs/user/${params.email}`
              ),
            element: (
              <PrivateRoute>
                <MyAddedJobs></MyAddedJobs>
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>,
      },
      {
        path: "/how-it-works",
        element: <HowITWorks></HowITWorks>,
      },

      {
        path: "/jobs/:id",
        loader: ({ params }) =>
          fetch(
            `https://freelance-marketplace-api-server-smoky.vercel.app/jobs/${params.id}`
          ),
        Component: JobDetails,
      },

      {
        path: "/updatejob/:id",
        loader: ({ params }) =>
          fetch(
            `https://freelance-marketplace-api-server-smoky.vercel.app/jobs/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateJob></UpdateJob>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider
        router={router}
        hydrateFallback={<LoadingSpinner></LoadingSpinner>}
      />
    </AuthProvider>
  </StrictMode>
);
