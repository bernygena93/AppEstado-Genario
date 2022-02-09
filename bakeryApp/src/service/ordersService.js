import axios from 'axios';
import {endpointOrders} from '../config/endpoints';

export const save = payload => {
  return axios.post(`${endpointOrders}.json`, payload);
};
export const getAll = () => {
  return axios.get(`${endpointOrders}.json`);
};
export const deleteById = id => {
  return axios.delete(`${endpointOrders}/${id}.json`);
};
