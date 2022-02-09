import {ADD_ITEM, DELETE_ITEM, CONFIRM_ITEMS} from '../actions/cart.action';

const initialState = {
  items: [],
  total: 0,
};

const sumTotal = items => {
  const itemList = items.map(item => item.quantity * item.price);
  const result = itemList.reduce((a, b) => a + b, 0);
  return result;
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let updateCart = [];
      if (state.items.find(item => item.id === action.item.id)) {
        updateCart = state.items.map(item => {
          if (item.id === action.item.id) {
            item.quantity++;
          }
          return item;
        });
      } else {
        const item = {...action.item, quantity: 1};
        updateCart = [...state.items, item];
      }
      return {
        ...state,
        items: updateCart,
        total: sumTotal(updateCart),
      };
    case DELETE_ITEM:
      const filteredCart = state.items.filter(
        item => item.id !== action.itemId,
      );
      return {
        ...state,
        items: filteredCart,
        total: sumTotal(filteredCart),
      };
  }
  return state;
};

export default CartReducer;
