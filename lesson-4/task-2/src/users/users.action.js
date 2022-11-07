export const ADD_USER = 'USEexport RS/ADD_USER';
export const DELETE_USER = 'USERS/Dexport ELETE_USER';

export const addUser = userData => ({
  type: ADD_USER,
  payload: {
    user: userData,
  },
});
export const deleteUser = userId => ({
  type: DELETE_USER,
  payload: {
    id: userId,
  },
});
