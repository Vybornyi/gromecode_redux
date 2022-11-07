import { ADD_USER, DELETE_USER } from './users.action';

const initialState = {
  usersList: [],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.user),
      };
    case DELETE_USER: {
      const newUsersList = state.usersList.filter(user => user.id !== action.payload.id);
      return {
        ...state,
        usersList: newUsersList,
      };
    }
    default:
      return state;
  }
};
export default usersReduser;
