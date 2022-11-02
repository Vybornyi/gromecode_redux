import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initialState = {
  usersList: [],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: state.usersList.concat(action.payload.userData),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.usersList.filter(user => user.id !== action.payload.userId),
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.usersList.map(user => {
          if (user.id === action.payload.userId) {
            return {
              ...user,
              ...action.payload.userData,
            };
          }
          return user;
        }),
      };

    default:
      return state;
  }
};
export default usersReduser;
