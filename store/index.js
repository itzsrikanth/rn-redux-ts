import {createStore} from 'redux';

const initialState = {
  counter: 0,
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    default:
      console.log('REDUCER');
      return {
        counter: state.counter + 1,
      };
  }
};

const store = createStore(reducer);
export default store;
