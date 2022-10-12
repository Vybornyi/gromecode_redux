export const ADD = 'USER/ADD';
export const DELETE = 'USER/DELETE';

export const addUser = userData => ({
  type: ADD,
  payload: userData,
});

export const deleteUser = userId => ({
  type: DELETE,
  payload: userId,
});
