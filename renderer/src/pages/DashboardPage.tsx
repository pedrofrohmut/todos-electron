import { useState } from "react"

import AddGoalForm from "../components/AddGoalForm"
import GoalList from "../components/GoalList"
import Spinner from "../components/Spinner"

const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState("")

  // Testing state. Fetch it later
  const user = ""
  const goals = [
    { id: 1, text: "Goal 1", userId: 1 },
    { id: 2, text: "Goal 2", userId: 1 },
    { id: 3, text: "Goal 3", userId: 1 }
  ]

  const handleAdd = (content) => {
    console.log("Handle Add Goal. content: " + content)
  }

  const handleDelete = (id) => {
    console.log("Handle Delete Goal. id: " + id)
  }

  return (
    <>
      {isLoading && <Spinner />}

      {!isLoading && (
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
      )}
    </>
  )
}

export default DashboardPage
