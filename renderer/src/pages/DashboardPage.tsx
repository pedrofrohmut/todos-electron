import { useEffect, useState } from "react"

import AddGoalForm from "../components/AddGoalForm"
import GoalList from "../components/GoalList"
import Spinner from "../components/Spinner"
import { getAll } from "../redux/goals/goalThunk"
import { useTypedDispatch, useTypedSelector } from "../redux/hooks"

const DashboardPage = () => {
    const [isLoading, setIsLoading] = useState(true)

    const user = useTypedSelector(state => state.auth.user)
    const goals = useTypedSelector(state => state.goal.goals)

    const dispatch = useTypedDispatch()

    const handleAdd = (content: string) => {
        console.log("Handle Add Goal. content: " + content)
    }

    const handleDelete = (id: string) => {
        console.log("Handle Delete Goal. id: " + id)
    }

    // onMount
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 300)
        dispatch(getAll())
    }, [])

    return (
        <>
            {isLoading && <Spinner />}

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
