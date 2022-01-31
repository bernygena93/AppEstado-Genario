import {ORDERS} from '../../constants/orders';

const initalState = {
  cart: ORDERS,
};

const OrderReducer = (state = initalState, action) => {
  return state;
};

export default OrderReducer;
