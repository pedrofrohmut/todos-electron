import axios from "axios"

import { AuthHeaders, Goal, ResponseGoal } from "../redux/types"

const GOALS_API_URL = "http://localhost:5000/api/goals"

const getTokenFromLocalStorage = (): string => {
    const user = localStorage.getItem("ls_user")
    if (user == null) {
        throw new Error("Not authenticated")
    }
    return JSON.parse(user).token
}

const getHeaders = (token: string): AuthHeaders => ({ Authorization: `Bearer ${token}` })

export const add = async (goal: Goal): Promise<Goal> => {
    const token = getTokenFromLocalStorage()
    const headers = getHeaders(token)
    const response = await axios.post(GOALS_API_URL, goal, { headers })
    const { _id, text, userId } = response.data
    return {
        id: _id,
        text,
        userId
    }
}

export const getAll = async (): Promise<Goal[]> => {
    const token = getTokenFromLocalStorage()
    const headers = getHeaders(token)
    const response = await axios.get(GOALS_API_URL, { headers })
    return response.data.map(({ _id, text, userId }: ResponseGoal) => ({
        id: _id,
        text,
        userId
    }))
}

export const remove = async (goalId: string): Promise<void> => {
    const token = getTokenFromLocalStorage()
    const headers = getHeaders(token)
    await axios.delete(`${GOALS_API_URL}/${goalId}`, { headers })
}
