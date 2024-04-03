import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICartProduct {
    id: string;
  name: string;
  price: number;
  color: string;
  size: string;
  available: string;
  category: string;
  brand: string[];
  img_url: string;
}

export interface ICart {
    product: ICartProduct,
    amount: number
}

export interface CartState {
    productAmount: number,
    products: ICart[],
    totalPrice: number
}

const sessionState: CartState = JSON.parse(sessionStorage.getItem('cart') || '{ "productAmount": "0","products": [], "totalPrice": "0"}')

if(sessionState) {
    sessionState.productAmount = Number(sessionState.productAmount)
    sessionState.totalPrice = Number(sessionState.totalPrice)
}
const initialState: CartState = sessionState

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<ICart>){
            state.productAmount += action.payload.amount
            const isExist = state.products.findIndex(cartProduct => cartProduct.product.name === action.payload.product.name)
            if(isExist != -1) {
                state.products[isExist].amount += action.payload.amount
            } else {
                state.products.push(action.payload)
            }
            state.totalPrice += action.payload.product.price * action.payload.amount
            sessionStorage.setItem('cart', JSON.stringify(state))
        },
        deleteProduct(state, action: PayloadAction<string>) {
            const productIndex = state.products.findIndex(cartProduct => cartProduct.product.name === action.payload)
            if(productIndex === -1) return console.log('Такого продукта в корзине нету ' + action.payload)
            state.productAmount -= state.products[productIndex].amount
            state.totalPrice -= state.products[productIndex].amount * state.products[productIndex].product.price
            state.products = state.products.slice(productIndex,productIndex)
            sessionStorage.setItem('cart', JSON.stringify(state))
        }
    }
})

export const {addProduct, deleteProduct} = cartSlice.actions