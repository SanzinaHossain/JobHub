import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Blog from "./Components/Screens/Blog/Blog.jsx"
import Home from "./Components/Screens/Home/Home.jsx"
import Jobs from "./Components/Screens/Jobs/Jobs.jsx"
import JobDetails from "./Components/Screens/JobDetails/JobDetails.jsx"
import BlogDetails from "./Components/Screens/BlogDetails/BlogDetails.jsx"
import Login from "./Components/Screens/Registration/Login.jsx"
import Register from "./Components/Screens/Registration/Register.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobDetails/:jobId",
        element: <JobDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blogDetails/:blogId",
        element: <BlogDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
