import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Dish from "../../models/Dish";

type CartState = {
    items: Dish[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        openCart: (state) => {
            state.isOpen = true;
        },
        closeCart: (state) => {
            state.isOpen = false;
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen
        },
        add: (state, action: PayloadAction<Dish>) => {
            state.items.push(action.payload)
        },
        remove: (state, action: PayloadAction<number>) => {
            const index = state.items.findIndex(item => item.id === action.payload)
            if (index !== -1) {
                state.items.splice(index, 1)
            }
        }
    }
})

export const { add, remove, openCart, closeCart, toggleCart } = cartSlice.actions
export default cartSlice.reducer