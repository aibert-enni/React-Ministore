import {combineSlices, configureStore } from "@reduxjs/toolkit";
import { appApi } from "../services/ProductService";
import { cartSlice } from "./slices/CartSlice";
import { userSlice } from "./slices/UserSlice";


const rootReducer = combineSlices(appApi, cartSlice, userSlice)

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(appApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch