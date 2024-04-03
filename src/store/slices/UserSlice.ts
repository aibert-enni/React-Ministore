import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/apiUserModels";

interface UserState {
    user: IUser | null
    initialized: boolean
}

const user = JSON.parse(localStorage.getItem('user') || "null")

const initialState: UserState = {
    user: user,
    initialized: user != null ? true : false
} 

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initUser(state, action: PayloadAction<IUser>){
            state.user = action.payload
            state.initialized = true
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logOut(state) {
            state.user = null
            state.initialized = false
            localStorage.removeItem('user')
        } 
    }
})

export const {initUser, logOut} = userSlice.actions