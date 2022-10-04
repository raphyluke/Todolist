import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./todoSlice"

// create store with todoReducer
export const store = configureStore({
    reducer: {
        todo : todoReducer,
    },
})