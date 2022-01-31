import {BREADS} from '../../constants/products.js';
import {FILTERED_BREAD, SELECT_BREAD} from '../actions/bread.action.js';

const initalState = {
  breads: BREADS,
  filteredBreads: [],
  selected: null,
};

const BreadsReducer = (state = initalState, action) => {
  switch (action.type) {
    case SELECT_BREAD:
      return {
        ...state,
        selected: state.breads.find(bread => bread.id === action.breadId),
      };
    case FILTERED_BREAD:
      return {
        ...state,
        filteredBreads: state.breads.filter(
          bread => bread.category === action.categoryId,
        ),
      };
    default:
      return state;
  }
};

export default BreadsReducer;
