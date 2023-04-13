import "./app.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import DashboardPage from "./pages/DashboardPage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"

import { useTypedDispatch } from "./redux/hooks"
import { signin } from "./redux/auth/authThunk"

const App = () => {
    const dispatch = useTypedDispatch()

    const lsUser = localStorage.getItem("ls_user")
    if (lsUser) {
        dispatch(signin(JSON.parse(lsUser)))
    }

    return (
        <div className="app-container">
            <Router>
                <Navbar />
                <div className="page-content">
                    <Routes>
                        <Route path="/" element={<DashboardPage />} />
                        <Route path="/signin" element={<SignInPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App
