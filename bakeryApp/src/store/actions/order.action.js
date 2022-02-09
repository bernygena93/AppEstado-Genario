import {deleteById, getAll} from '../../service/ordersService';

export const GET_ORDERS = 'GET_ORDERS';
export const DELETE_ORDERS = 'DELETE_ORDERS';

export const getOrders = () => {
  return async dispatch => {
    try {
      const result = await getAll();
      const orders = Object.keys(result.data).map(key => ({
        ...result.data[key],
        id: key,
      }));
      dispatch({
        type: GET_ORDERS,
        payload: orders,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
export const deleteOrder = id => {
  return async dispatch => {
    try {
      await deleteById(id);
      dispatch({
        type: DELETE_ORDERS,
        orderId: id,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
