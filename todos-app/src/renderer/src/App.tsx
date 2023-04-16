import "./assets/app.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import DashboardPage from "./pages/DashboardPage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"

const App = () => (
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

export default App

