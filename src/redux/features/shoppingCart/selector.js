export const selectShoppingCartModule = (state) => state.shoppingCart;

export const selectTicketAmount = (state, id) =>
  selectShoppingCartModule(state)[id] || 0;

  export const selectTotalTicketsAmount = (state) => Object.values(selectShoppingCartModule(state)).reduce((acc, count) => acc + count, 0) || 0;