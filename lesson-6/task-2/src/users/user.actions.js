import getUserData from './user.gateway';

export const SHOW_SPINNER = 'USER/SHOW_SPINNER';
export const USER_DATA_RECIVED = 'USER/USER_DATA_RECIVED';

export const showSpinner = () => ({
  type: SHOW_SPINNER,
});
export const userDataRecived = userData => ({
  type: USER_DATA_RECIVED,
  payload: {
    userData,
  },
});
export const fetchUserData = inputValue =>
  function (dispatch) {
    dispatch(showSpinner());
    getUserData(inputValue).then(data => dispatch(userDataRecived(data)));
  };
