import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk('apiProduct/getAllProducts' , async () => {
    try {
        const response = await axios.get(`http://localhost:8000/product/products`)
        if(response.status === 200) {
            return response.data.data.products
        }
    } catch (error) {
        console.log(error)
    }
})

export const createProduct = createAsyncThunk('apiProduct/createProduct', async (formValue) => {
    try {
        const response = await axios.post('http://localhost:8000/product', formValue);
        console.log('response', response);
    } catch (error) {
        console.log('error', error);
    }
})

const apiProductSlice = createSlice({
    name: 'apiProduct',
    initialState: {
        loading: true,
        apiProduct: []
    },
    reducers: {

    },
    extraReducers: {
        [getAllProducts.pending]: (state, action) =>  {
            state.loading = true;
        },
        [getAllProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.apiProduct = action.payload
        },
        [getAllProducts.rejected]: (state, action) => {
            state.loading = false;
        }
    }
})

export default apiProductSlice.reducer