import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/CartSlice";
import favoriteSlice from "./slice/FavouriteSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        favorites: favoriteSlice.reducer,
    },
});