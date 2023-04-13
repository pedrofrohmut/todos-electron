import "./goal-list.css"

import { Goal } from "../redux/types"

type Props = {
    goals: Goal[]
    removeGoal: (goalId: string) => void
}

const GoalList = ({ goals, removeGoal }: Props) => (
    <>
        {goals && goals.length > 0 && (
            <div className="goals">
                <div className="goals-title">Goals</div>
                {goals.map((goal: Goal) => (
                    <div className="goal" key={goal.id}>
                        <div className="content">{goal.text}</div>
                        <button className="btn" onClick={() => removeGoal(goal?.id)}>
                            <i className="fa-solid fa-trash-can"></i>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        )}

        {(!goals || goals.length == 0) && (
            <div className="goals">
                <div className="goals-title">No goals to display</div>
            </div>
        )}
    </>
)

export default GoalList
