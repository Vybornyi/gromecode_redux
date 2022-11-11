import { createStore, combineReducers } from 'redux';
import userReducer from './users/user.reducer';

const appStore = combineReducers({
  users: userReducer,
});
const store = createStore(appStore);
export default store;
