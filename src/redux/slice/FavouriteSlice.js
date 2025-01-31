import { createSelector, createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        favoriteItemList: [],
    },
    reducers: {
        addToFavorites(state, action) {
            const newItem = action.payload;

            const existingItemIndex = state.favoriteItemList.findIndex(
                (item) => item.id === newItem.id
            );
            if (existingItemIndex !== -1) {
                state.favoriteItemList[existingItemIndex].quantity++;
            } else {
                state.favoriteItemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                    cover: newItem.images,
                });
            }
        },
git add

        clearFavorites(state) {
            state.favoriteItemList = [];
        },
    },
});


export const favoriteActions = favoriteSlice.actions;

export const { clearFavorites } = favoriteSlice.actions;

export const selectTotalFavorites = createSelector(
    (state) => state.favorites.favoriteItemList,
    (favoriteItemList) => favoriteItemList.length
);

export default favoriteSlice;