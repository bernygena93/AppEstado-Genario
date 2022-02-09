import {DELETE_ORDERS, GET_ORDERS} from '../actions/order.action';

const initalState = {
  orders: [],
};

const OrderReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case DELETE_ORDERS:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.orderId),
      };
    default:
      return state;
  }
};

export default OrderReducer;
