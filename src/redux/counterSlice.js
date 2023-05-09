import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        number: 0,
        userName: "parth"
    },
    reducers: {

    }
})

// always export reducer 
export default counterSlice.reducer