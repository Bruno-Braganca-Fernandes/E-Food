import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = Dish & { cartId: string }

type CartState = {
    items: CartItem[];
    isOpen: boolean;
};

const initialState: CartState = {
    items: [],
    isOpen: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },
        add: (state, action: PayloadAction<Dish>) => {
            state.items.push({
                ...action.payload,
                cartId: crypto.randomUUID()
            });
        },
        remove: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.cartId !== action.payload);
        }
    },
});

export const { add, remove, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
