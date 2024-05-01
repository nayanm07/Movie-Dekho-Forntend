import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: false,
    userData: null,
    accessToken : null,
    refreshToken : null,
}

// Check local storage for login data
const storedAuth = JSON.parse(localStorage.getItem('auth'));
if (storedAuth) {
    // initialState.status = storedAuth.status;
    // initialState.userData = storedAuth.userData;
    initialState.accessToken = storedAuth.accessToken;
    initialState.refreshToken = storedAuth.refreshToken;
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            // Save login data to local storage    status: true, userData: action.payload.user,
            localStorage.setItem('auth', JSON.stringify({  accessToken: action.payload.accessToken, refreshToken: action.payload.refreshToken }));        },

        logout: (state, action) => {
            
            state.status = false;
            state.userData = null;
            // Clear login data from local storage
            localStorage.removeItem('auth');
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer; 