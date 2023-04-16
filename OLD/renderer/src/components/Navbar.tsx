import { Link, useNavigate } from "react-router-dom"

import { resetAuth } from "../redux/auth/authSlice"
import { signout } from "../redux/auth/authThunk"
import { useTypedDispatch, useTypedSelector } from "../redux/hooks"

import "./navbar.css"

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useTypedDispatch()
    const { user } = useTypedSelector(state => state.auth)

    const handleSignOut = () => {
        dispatch(signout())
        dispatch(resetAuth())
        navigate("/signin")
    }

    return (
        <header>
            <nav>
                {user && (
                    <>
                        <Link className="nav-link" to={"/"}>
                            <span>{user.name}</span>
                        </Link>
                        <a className="nav-link" onClick={handleSignOut}>
                            Sign Out
                        </a>
                    </>
                )}

                {!user && (
                    <>
                        <Link className="nav-link" to={"/signin"}>
                            Sign In
                        </Link>
                        <Link className="nav-link" to={"/signup"}>
                            Sign Up
                        </Link>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Navbar
