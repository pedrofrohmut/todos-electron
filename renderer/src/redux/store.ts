import { configureStore } from "@reduxjs/toolkit"

import authReducer from "./auth/authSlice"
import goalsReducer from "./goals/goalSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        goal: goalReducer
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispach = typeof store.dispatch

export default {
    store,
    RootState,
    AppDispach
}
