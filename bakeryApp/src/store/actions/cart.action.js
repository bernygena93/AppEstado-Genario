import {save} from '../../service/ordersService';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CONFIRM_ITEMS = 'CONFIRM_ITEMS';

export const addItem = item => ({
  type: ADD_ITEM,
  item,
});
export const deleteItem = id => ({
  type: DELETE_ITEM,
  itemId: id,
});
export const confirmItems = (payload, total) => {
  return async dispatch => {
    try {
      const orders = await save({items: payload, total});
      dispatch({
        type: CONFIRM_ITEMS,
        confirm: true,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
