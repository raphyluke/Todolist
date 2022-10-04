import { createSlice } from "@reduxjs/toolkit"

// create todolist slice
const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todoList.splice(action.payload, 1)
        },
        changeValid: (state, action) => {
            state.todoList[action.payload].valid = !state.todoList[action.payload].valid
        },
    },
})

// export actions
export const { addTodo, removeTodo, changeValid } = todoSlice.actions

// export reducer
export default todoSlice.reducer