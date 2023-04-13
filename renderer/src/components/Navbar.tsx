import { Link } from "react-router-dom"
import { signout } from "../redux/auth/authThunk"
import { useTypedDispatch } from "../redux/hooks"

import "./navbar.css"

const Navbar = () => {
    const dispatch = useTypedDispatch()

    const handleSignOut = () => {
        dispatch(signout())
    }

    return (
        <header>
            <nav>
                <Link className="nav-link" to={"/"}>
                    Dashboard
                </Link>
                <a className="nav-link" onClick={handleSignOut}>
                    Sign Out
                </a>
                <Link className="nav-link" to={"/signup"}>
                    Sign Up
                </Link>
                <Link className="nav-link" to={"/signin"}>
                    Sign In
                </Link>
            </nav>
        </header>
    )
}

export default Navbar
