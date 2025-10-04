import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Dish } from "../../types"

type CartItem = Dish & { cartId: string }

type CartState = {
    items: CartItem[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.isOpen = !state.isOpen
        },
        addItem: (state, action: PayloadAction<Dish>) => {
            state.items.push({
                ...action.payload,
                cartId: crypto.randomUUID()
            })
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                (item) => item.cartId !== action.payload
            )
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})

export const { addItem, removeItem, toggleCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
