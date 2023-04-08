import { Link } from "react-router-dom"

import "./navbar.css"

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link className="nav-link" to={"/"}>Dashboard</Link>
        <Link className="nav-link">Sign Out</Link>
        <Link className="nav-link" to={"/signup"}>Sign Up</Link>
        <Link className="nav-link" to={"/signin"}>Sign In</Link>
      </nav>
    </header>
  )
}

export default Navbar
