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
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload)
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