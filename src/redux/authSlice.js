import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

function getLocalStorageData() {
    const isLogin = localStorage.getItem('isLogin')
    if(isLogin) {
        return true 
    } 

    return false
}

export const login = createAsyncThunk('auth/login' , async ({values, navigate}, {dispatch} ) => {
    try {
        dispatch(startLoading())
        const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZBwEE2e-zryX-XxMv461moXLOoGBopFE`, values)
        if(response.status === 200) {
            dispatch(loginSuccess())
            localStorage.setItem('isLogin', 'true')
            navigate("/");
        }
        dispatch(stopLoading())
    } catch (error) {
        dispatch(stopLoading())
        console.log('error', error.response.data.error.message);
       alert(error.response.data.error.message);
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        isLogin: getLocalStorageData()
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isLogin = true
        },
        startLoading: (state, action) => {
            state.loading = true 
        },
        stopLoading: (state, action) => {
            state.loading = false
        },
        logout: (state, action) => {
            localStorage.removeItem('isLogin')
            state.isLogin = false 
        }
    }
})

export const { loginSuccess, startLoading, stopLoading, logout } = authSlice.actions

export default authSlice.reducer