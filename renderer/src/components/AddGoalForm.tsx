import { useState } from "react"

const AddGoalForm = ({ addGoal }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [content, setContent] = useState("")

  const resetState = () => {
    setContent("")
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(false)
    }, 2000)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)
    setIsSubmitted(true)

    addGoal(content)

    resetState()
  }

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-inline-group">
          <input
            className="form-text"
            type="text"
            placeholder="What is your goal?"
            required
            min="3"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <button className="btn" type="submit" disabled={isSubmitted}>
            <i className="fa-solid fa-paper-plane"></i>
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default AddGoalForm
