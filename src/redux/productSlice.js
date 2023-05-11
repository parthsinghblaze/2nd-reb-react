import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: []
}

const productSlice = createSlice({
    name: 'productPrice',
    initialState,
    reducers: {

    },
})

export default productSlice.reducer