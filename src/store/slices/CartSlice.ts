import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

export interface ICartProduct {
    product: IProduct,
    amount: number
}

interface CartState {
    productAmount: number,
    products: ICartProduct[],
    totalPrice: number
}

const initialState: CartState = {
    productAmount: 0,
    products: [],
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<ICartProduct>){
            state.productAmount += action.payload.amount
            const isExist = state.products.findIndex(cartProduct => cartProduct.product.name === action.payload.product.name)
            if(isExist != -1) {
                state.products[isExist].amount += action.payload.amount
            } else {
                state.products.push(action.payload)
            }
            state.totalPrice += action.payload.product.price * action.payload.amount
        },
        deleteProduct(state, action: PayloadAction<string>) {
            const productIndex = state.products.findIndex(cartProduct => cartProduct.product.name === action.payload)
            if(productIndex === -1) return console.log('Такого продукта в корзине нету ' + action.payload)
            state.productAmount -= state.products[productIndex].amount
            state.totalPrice -= state.products[productIndex].amount * state.products[productIndex].product.price
            state.products = state.products.slice(productIndex,productIndex)
        }
    }
})

export const {addProduct, deleteProduct} = cartSlice.actions