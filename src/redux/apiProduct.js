import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk('apiProduct/getAllProducts' , async (data, {dispatch} ) => {

    try {
        dispatch(setErrorFalse())
        const response = await axios.get(`http://localhost:8000/product/products`)
        console.log('response', response);
        if(response.status === 200) {
            // dispatch(stopLoading())
            // dispatch(setProduct(response.data.data.products))
            return response.data.data.products
        }
        
    } catch (error) {
        // dispatch(stopLoading())
       if(error.code === 'ERR_NETWORK') {
        alert("Server Issue")
        dispatch(setErrorTrue());
        }
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
        alert("Some thing went wrong!");
    }
})

export const updateProduct = createAsyncThunk('apiProduct/deleteProduct', async ({id, formValue, navigate}, { dispatch }) => {
    try {
        
        const response = await axios.patch(`http://localhost:8000/product/${id}`, formValue)
        console.log(response);
        if(response.status === 200) {
            navigate('/view-product')
        }
    } catch (error) {
        alert("Some thing went wrong!");
    }
})

const apiProductSlice = createSlice({
    name: 'apiProduct',
    initialState: {
        loading: true,
        apiProduct: [],
        error: false,
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
        },
        setErrorTrue: (state, action) => {
            state.error = true;
        },
        setErrorFalse: (state, action) => {
            state.error =  false;
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
            state.apiProduct = [];
        }
    }
})

export const  { startLoading, stopLoading, setProduct, setErrorTrue, setErrorFalse } = apiProductSlice.actions

export default apiProductSlice.reducer