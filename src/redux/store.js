import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { shoppingCartReducer } from "@/redux/features/shoppingCart";
import { movieApi } from "@/redux/services/movieApi"

// import { movieApi } from "@/redux/services/movieApi";

export const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
        shoppingCart: shoppingCartReducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware])
});