import {SIGNIN, SIGNUP} from '../actions/auth.action';

const initialState = {
  token: null,
  userId: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
      };
    case SIGNIN:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
      };
    default:
      return state;
  }
};

export default AuthReducer;
