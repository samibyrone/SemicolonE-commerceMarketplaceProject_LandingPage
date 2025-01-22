import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemList: [],
        totalQuantity: 0,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;

            const existingItem = state.itemList.find(
                (item) => item.id === newItem.id
            );

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    cover: newItem.images,
                });
                state.totalQuantity++;
            }
        },

        removeCartItem(state, action) {
            const id = action.payload;

            const existingItem = state.itemList.find((item) => item.id === id);
            if(existingItem.quantity === 1) {
                state.itemList = state.itemList.filter((item) => item.id !== id);
                state.totalQuantity--;
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },

        removeAllCartItem(state, action) {
            const id = action.payload;

            state.itemList = state.itemList.filter((item) => item.id !== id);
            state.totalQuantity -= state.itemList.reduce(
                (accountItem, item) => accountItem + item.quantity,
                0
            );
        },
    },
});


export const CartActions = cartSlice.actions;
export const {} = cartSlice.actions;
 
export const selectedTotalQuantity = createSelector(
    (state) => state.cart.itemList,
    (itemList) => itemList.reduce((account) => account + 1, 0)
);

export const selectedTotalPrice = createSelector(
    (state) => state.cart.itemList,
    (itemList) => itemList.reduce((account, item) => account + item.totalPrice, 0)
);

export default cartSlice;