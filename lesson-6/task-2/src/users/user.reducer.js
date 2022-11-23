import { SHOW_SPINNER, USER_DATA_RECIVED } from './user.actions';

const initialState = {
  isFetching: false,
  userData: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      };
    case USER_DATA_RECIVED:
      return {
        ...state,
        userData: action.payload.userData,
        isFetching: false,
      };
    default:
      return state;
  }
};
export default userReducer;
