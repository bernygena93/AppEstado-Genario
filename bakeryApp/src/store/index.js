import {createStore, combineReducers, applyMiddleware} from 'redux';
import CategoryReducer from './reducers/category.reducer';
import BreadsReducer from './reducers/bread.reducer';
import CartReducer from './reducers/cart.reducer';
import thunk from 'redux-thunk';
import OrderReducer from './reducers/orders.reducer';
import AuthReducer from './reducers/auth.reducer';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  breads: BreadsReducer,
  carts: CartReducer,
  orders: OrderReducer,
  auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
