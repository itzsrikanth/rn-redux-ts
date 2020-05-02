import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './reducer';

const jsonPlaceholderAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users',
  responseType: 'json',
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, axiosMiddleware(jsonPlaceholderAxios)),
);
export default store;
/**
 * Inspect axios call in 'react-native-debugger'
 * https://stackoverflow.com/a/55450655/5305151
 */
