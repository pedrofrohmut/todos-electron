import { Link } from "react-router-dom"

import "./navbar.css"

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link class="nav-link" to={"/"}>Dashboard</Link>
        <Link class="nav-link">Sign Out</Link>
        <Link class="nav-link" to={"/signup"}>Sign Up</Link>
        <Link class="nav-link" to={"/signin"}>Sign In</Link>
      </nav>
    </header>
  )
}

export default Navbar
