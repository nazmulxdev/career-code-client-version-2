import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../LayOuts/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import LogIn from "../Pages/LogIn/LogIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import LoadingSpinner from "../Components/LoadingSpinner";
import PrivateRoutes from "../Routes/Private/PrivateRoutes";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplicaton/ViewApplications";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({ params }) => {
          return fetch(`http://localhost:3000/jobs/${params.id}`);
        },
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/apply/:id",
        element: (
          <PrivateRoutes>
            <JobApply></JobApply>
          </PrivateRoutes>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:3000/jobs/${params.id}`);
        },
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRoutes>
            <MyApplications></MyApplications>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoutes>
            <AddJob></AddJob>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoutes>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/applications/:id",
        element: (
          <PrivateRoutes>
            <ViewApplications></ViewApplications>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/applications/job/${params.id}`),
      },
    ],
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/logIn",
    Component: LogIn,
  },
]);

export default Router;
