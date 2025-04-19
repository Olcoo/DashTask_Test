import { configureStore } from "@reduxjs/toolkit";
import { contactReducer, orderReducer } from "./slices";
import { productsStockReducer } from "./slices/productsStock/productSockSlice";

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        orders: orderReducer,
        productsStock: productsStockReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;