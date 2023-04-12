import { useRef, useState } from "react"

import Spinner from "../components/Spinner"
import { signup } from "../redux/auth/authThunk"
import { useTypedDispatch } from "../redux/hooks"

const SignUpPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const passwordRef = useRef<HTMLInputElement>(null)

    const dispatch = useTypedDispatch()

    const resetState = () => {
        setName("")
        setEmail("")
        setPhone("")
        setPassword("")
        setConfirmPassword("")
        setTimeout(() => {
            setIsLoading(false)
            setIsSubmitted(false)
        }, 2000)
    }

    const resetPasswordAndFocus = () => {
        setPassword("")
        setConfirmPassword("")

        setTimeout(() => {
            setIsLoading(false)
            setIsSubmitted(false)
            if (passwordRef && passwordRef.current) {
                passwordRef.current.focus()
            }
        }, 1000)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setIsSubmitted(true)

        if (password !== confirmPassword) {
            // TODO: add a toaster maybe
            alert("Password did not match")
            resetPasswordAndFocus()
            return
        }

        dispatch(signup({ name, email, phone, password }))
        resetState()
    }

    return (
        <div className="page-container">
            <section className="heading">
                <h1 className="page-title">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    Sign Up
                </h1>
                <p>Sign Up to so you can start working on your goals</p>
            </section>

            {isLoading && <Spinner />}

            <section className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label-block">Name</label>
                        <input
                            className="form-text"
                            type="text"
                            required
                            placeholder="Your full name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="label-block">E-mail</label>
                        <input
                            className="form-text"
                            type="email"
                            required
                            placeholder="E-mail address you will use to sign in later"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="label-block">Password</label>
                        <input
                            className="form-text"
                            type="password"
                            required
                            placeholder="Password to authenticate to your account later"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            ref={passwordRef}
                        />
                    </div>
                    <div className="form-group">
                        <label className="label-block">Confirm Password</label>
                        <input
                            className="form-text"
                            type="password"
                            required
                            placeholder="Confirm your password to check for any typos"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn" type="submit" disabled={isSubmitted}>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default SignUpPage
