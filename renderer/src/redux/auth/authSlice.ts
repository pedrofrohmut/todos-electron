import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { signup, signin, signout } from "./authThunk"

import { AuthState, SessionUser } from "../types"

const initialState: AuthState = {
    user: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetAuth: (state: AuthState) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        },
        setUser: (state: AuthState, action: PayloadAction<SessionUser>) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder: any) => {
        builder
            // Sign Up
            .addCase(signup.pending, (state: AuthState) => {
                state.isLoading = true
            })
            .addCase(signup.fulfilled, (state: AuthState) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(signup.rejected, (state: AuthState, action: PayloadAction<string>) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            // Sign In
            .addCase(signin.pending, (state: AuthState) => {
                state.isLoading = true
            })
            .addCase(signin.fulfilled, (state: AuthState, action: PayloadAction<SessionUser>) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(signin.rejected, (state: AuthState, action: PayloadAction<string>) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            // Sign Out
            .addCase(signout.fulfilled, (state: AuthState) => {
                state.user = null
            })
    }
})

export const { resetAuth, setUser } = authSlice.actions

export default authSlice.reducer
