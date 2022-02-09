import {URL_API_SIGNUP, URL_API_SIGNIN} from '@env';

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';

export const signup = (email, password) => {
  return async dispatch => {
    try {
      const response = await fetch(URL_API_SIGNUP, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();
      console.log(data);
      dispatch({
        type: SIGNUP,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
export const signin = (email, password) => {
  return async dispatch => {
    try {
      const response = await fetch(URL_API_SIGNIN, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();
      console.log(data);
      dispatch({
        type: SIGNIN,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
