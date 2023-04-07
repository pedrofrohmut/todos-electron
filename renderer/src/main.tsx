import React from "react"
import ReactDOM from "react-dom/client"

// import App from "./App"
// import "./index.css"

import DashboardPage from "./pages/DashboardPage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"

/*
    The Router Stuff will probably remain in this file.
    No reason to change it for only three routes as expected
    */
import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom"

const Root = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
          <li>
            <Link to={"/signin"}>Sign In</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "dashboard", element: <DashboardPage /> },
      { path: "signin", element: <SignInPage /> },
      { path: "signup", element: <SignUpPage /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
