import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
}

const cartSlicer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.itemId === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    itemId: newItem.id,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title,
                    price: newItem.price
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.itemId === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.itemId !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        }
    }
})

export default cartSlicer.reducer;
export const cartActions = cartSlicer.actions;
