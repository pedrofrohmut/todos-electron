import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import AddGoalForm from "../components/AddGoalForm"
import GoalList from "../components/GoalList"
import Spinner from "../components/Spinner"

import { setUser } from "../redux/auth/authSlice"
import { resetGoals } from "../redux/goals/goalSlice"
import { add, getAll, remove } from "../redux/goals/goalThunk"
import { useTypedDispatch, useTypedSelector } from "../redux/hooks"

const DashboardPage = () => {
    const dispatch = useTypedDispatch()
    const navigate = useNavigate()

    // This variable only exists to make the UI not so flashy (loading ending too fast)
    const [isLoading, setIsLoading] = useState(true)

    const user = useTypedSelector(state => state.auth.user)
    const { goals, isLoading: isLoadingGoals } = useTypedSelector(state => state.goal)

    const handleAdd = (text: string) => {
        if (user) {
            setIsLoading(true)
            dispatch(add({ text, userId: user.id }))
            setTimeout(() => {
                dispatch(getAll())
                setIsLoading(false)
            }, 380)
        }
    }

    const handleDelete = (id: string) => {
        if (user) {
            setIsLoading(true)
            dispatch(remove(id))
            setTimeout(() => {
                dispatch(getAll())
                setIsLoading(false)
            }, 380)
        }
    }

    // Check for user on localStorage
    useEffect(() => {
        if (!user) {
            const lsUser = localStorage.getItem("ls_user")
            if (!lsUser) {
                setTimeout(() => navigate("/signin"), 500)
            } else {
                dispatch(setUser(JSON.parse(lsUser)))
            }
        }
    }, [user])

    // Load goals
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 380)

        dispatch(getAll())

        return () => {
            dispatch(resetGoals())
        }
    }, [])

    if (!user) return <Spinner />

    return (
        <>
            {(isLoading || isLoadingGoals) && <Spinner />}

            <div className="page-container">
                <section className="heading">
                    <h1 className="page-title">
                        <i className="fa-solid fa-calendar-days"></i>
                        Goals Dashboard
                    </h1>
                    <p>Welcome {user && user.name ? user.name : "username"}</p>
                </section>

                <AddGoalForm addGoal={handleAdd} />

                <GoalList goals={goals} removeGoal={handleDelete} />
            </div>
        </>
    )
}

export default DashboardPage
