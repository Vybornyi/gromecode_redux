import { createStore, combineReducers } from 'redux';
import userReducer from './users/user.reducer';

const appReducer = combineReducers({
  users: userReducer,
});
const store = createStore(appReducer);
export default store;
