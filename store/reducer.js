import {combineReducers} from 'redux';

const initialState = {
  counter: 0,
};

export default combineReducers({
  main: function reducer(state = initialState, action) {
    switch (action.type) {
      default:
        console.log('REDUCER', state, action);
        return {
          counter: state.counter + 1,
        };
    }
  },
});
