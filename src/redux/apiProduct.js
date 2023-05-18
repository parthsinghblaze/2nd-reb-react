import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk('apiProduct/getAllProducts' , async (data, {dispatch} ) => {
    try {
        // dispatch(startLoading())
        const response = await axios.get(`http://localhost:8000/product/products`)
        if(response.status === 200) {
            // dispatch(stopLoading())
            // dispatch(setProduct(response.data.data.products))
            return response.data.data.products
        }
    } catch (error) {
        // dispatch(stopLoading())
        console.log(error)
    }
})

export const createProduct = createAsyncThunk('apiProduct/createProduct', async ({formValue, navigate} ) => {
    try {
        const response = await axios.post('http://localhost:8000/product', formValue);
        console.log('response', response);
        if(response.status === 200) {
            navigate("/view-product")
        }
    } catch (error) {
        console.log('error', error)
        alert(error.response.data.message);
    }
})

export const deleteProduct = createAsyncThunk('apiProduct/deleteProduct', async (id, { dispatch }) => {
    try {
        const response = await axios.delete(`http://localhost:8000/product/${id}`)
        console.log(response);
        if(response.status === 200) {
            dispatch(getAllProducts())
        }
    } catch (error) {
        console.log(error);
    }
})

const apiProductSlice = createSlice({
    name: 'apiProduct',
    initialState: {
        loading: true,
        apiProduct: []
    },
    reducers: {
        startLoading: (state, action) => {
            state.loading = true;
        },
        stopLoading: (state, action) => {
            state.loading = false 
        },
        setProduct: (state, action) => {
            state.apiProduct = action.payload
        }
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

export const  { startLoading, stopLoading, setProduct } = apiProductSlice.actions

export default apiProductSlice.reducer