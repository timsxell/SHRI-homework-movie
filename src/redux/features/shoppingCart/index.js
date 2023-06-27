import { createSlice } from "@reduxjs/toolkit";

//initial state is an empty object because later we will be storing data in format:
// movieId (key) : number of tickets (data)
const initialState = {};

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {
        increment: (state, {payload}) => {
            const count = state[payload] || 0;
            state[payload] = count + 1;
        },

        decrement: (state, {payload}) => {
            const count = state[payload];

            if(!count) return;

            if(count === 1) delete state[payload];

            state[payload] = count - 1;
        },

        reset: () => initialState
    }
});

export const shoppingCartReducer = shoppingCartSlice.reducer;
export const shoppingCartActions = shoppingCartSlice.actions;