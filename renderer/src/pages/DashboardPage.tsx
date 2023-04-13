import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import AddGoalForm from "../components/AddGoalForm"
import GoalList from "../components/GoalList"
import Spinner from "../components/Spinner"

import { resetGoals } from "../redux/goals/goalSlice"
import { getAll } from "../redux/goals/goalThunk"
import { useTypedDispatch, useTypedSelector } from "../redux/hooks"

const DashboardPage = () => {
    const dispatch = useTypedDispatch()
    const navigate = useNavigate()

    // This variable only exists to make the UI not so flashy (loading ending too fast)
    const [isLoading, setIsLoading] = useState(true)

    const user = useTypedSelector(state => state.auth.user)
    const {
        goals,
        isLoading: isLoadingGoals,
        isSuccess,
        isError,
        message
    } = useTypedSelector(state => state.goal)

    const handleAdd = (content: string) => {
        console.log("Handle Add Goal. content: " + content)
    }

    const handleDelete = (id: string) => {
        console.log("Handle Delete Goal. id: " + id)
    }

    // onMount
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 380)

        dispatch(getAll())

        return () => {
            dispatch(resetGoals())
        }
    }, [])

    useEffect(() => {
        if (!user) {
            setTimeout(() => navigate("/signin"), 500)
        }
    }, [user])

    if (! user) return <Spinner />

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
