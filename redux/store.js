import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from '../data/users/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
})