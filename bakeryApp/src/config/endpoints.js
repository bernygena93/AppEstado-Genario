import {URL_DB_FIREBASE, URL_API_SIGNUP, URL_API_SIGNIN} from '@env';

const endpointBase = URL_DB_FIREBASE;

export const endpointAuthSignup = URL_API_SIGNUP;
export const endpointAuthSingin = URL_API_SIGNIN;
export const endpointOrders = `${endpointBase}orders`;
