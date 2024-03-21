import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: 'Todo',
    initialState: [],
    count : "0",
    reducers: {
        addtodo: (state, action) => {
            state.push(action.payload)
            sessionStorage.setItem([],state)

        },
        createtodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = true
            }
        }
        ,
        deletetodo: (state, action) => {
                return state.filter((todo,index) => todo[index]!= action.payload)
        },
        icreaseselected :(state)=>{
            state.count++
        }
    }

})

export const {addtodo,createtodo,deletetodo,icreaseselected} = TodoSlice.actions
export default TodoSlice.reducer