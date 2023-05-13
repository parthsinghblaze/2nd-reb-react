import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('api/getProducts' , async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
})

const initialState = {
    loading: true,
    products: [],
    carts: []
}

const productSlice = createSlice({
    name: 'productPrice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log('addedProducts', action.payload)
            const cartId = action.payload.id;

            const addedProducts = state.products.map((item) => {
                if(item.id === cartId) {
                    return {...item, isAdded: true}
                } else {
                    return item 
                }
            })

            state.products=  addedProducts;

            state.carts = [...state.carts, action.payload]
        }
    },
    extraReducers: {
        [getProducts.pending] : (state, action) => {
            state.loading = true;
        },
        [getProducts.fulfilled]: (state, action) => {

            //  added isAdded key into my product list
            const modifyData = action.payload.map((item) => {
                return {...item, isAdded: false}
            });

            state.loading = false;
            state.products = modifyData
        },
        [getProducts.rejected]: (state, action) => {
            state.loading = false;
        }
    }
})

export const {addToCart} = productSlice.actions

export default productSlice.reducer