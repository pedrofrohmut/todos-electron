import "./goal-list.css"

const GoalList = ({ goals, removeGoal }) => (
  <>
    {goals && goals.length > 0 && (
      <div className="goals">
        <div className="goals-title">Goals</div>
        {goals.map(goal => (
          <div className="goal" key={goal.id}>
            <div className="content">{goal.text}</div>
            <button className="btn" onClick={() => removeGoal(goal.id)}>
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
