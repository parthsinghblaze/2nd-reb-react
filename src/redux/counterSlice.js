import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        number: 0,
        userName: "parth"
    },
    reducers: {
        increment: (state, action) => {
            state.number = state.number + Number(action.payload)
        },
        decrement: (state, action) => {
            state.number = state.number - 1
        },
        changeName: (state, action) => {
            state.userName = "Mitali"
        }
    }
})

export const { increment, decrement, changeName } = counterSlice.actions;

// always export reducer 
export default counterSlice.reducer