import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart";
export const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
});