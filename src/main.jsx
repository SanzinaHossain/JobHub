import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Jobs from "./Components/Screens/Jobs/Jobs.jsx"
import Blog from "./Components/Screens/Blog/Blog.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
