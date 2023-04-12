import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { getAll, add, remove } from "./goalThunk"

import { Goal, GoalState } from "../types"

// enum RequestStatus {
//     Idle = "IDLE",
//     Loading = "LOADING",
//     Success = "SUCCESS",
//     Error = "ERROR"
// }

const initialState: GoalState = {
    goals: [],
    // status: RequestStatus,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}

export const goalSlice = createSlice({
    name: "goals",
    initialState,
    reducers: {
        reset: (state: GoalState) => {
            state.goals = []
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ""
        }
    },
    extraReducers: (builder: any) => {
        builder
            // Get all
            .addCase(getAll.pending, (state: GoalState) => {
                state.isLoading = true
            })
            .addCase(getAll.fulfilled, (state: GoalState, action: PayloadAction<Goal[]>) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = action.payload
            })
            .addCase(getAll.rejected, (state: GoalState, action: PayloadAction<string>) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            // Add
            .addCase(add.pending, (state: GoalState) => {
                state.isLoading = true
            })
            .addCase(add.fulfilled, (state: GoalState, action: PayloadAction<Goal>) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = [...state.goals, action.payload]
            })
            .addCase(add.rejected, (state: GoalState, action: PayloadAction<string>) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            // Delete
            .addCase(remove.pending, (state: GoalState) => {
                state.isLoading = true
            })
            .addCase(remove.fulfilled, (state: GoalState, action: PayloadAction<string>) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = state.goals.filter(goal => goal.id !== action.payload)
            })
            .addCase(remove.rejected, (state: GoalState, action: PayloadAction<string>) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = goalSlice.actions

export default goalSlice.reducer
