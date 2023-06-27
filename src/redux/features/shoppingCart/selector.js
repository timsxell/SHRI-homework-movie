const selectShoppingCartModule = (state) => state.shoppingCart;

export const selectTicketAmount = (state, id) =>
  selectShoppingCartModule(state)[id] || 0;