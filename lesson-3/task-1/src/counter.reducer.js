import { INCREMENT, DECREMENT, RESET } from './counter.actions';

const initialState = {
  counter: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case RESET:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
export default countReducer;
