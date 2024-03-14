import {combineSlices, configureStore } from "@reduxjs/toolkit";
import { productApi } from "../services/ProductService";
import { cartSlice } from "./slices/CartSlice";

const rootReducer = combineSlices(productApi, cartSlice)

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch