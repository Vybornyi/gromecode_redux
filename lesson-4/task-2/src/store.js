import { createStore, combineReducers } from 'redux';
import countReducer from './counter.reducer';
import usersReduser from './users.reducer';

const appReduser = combineReducers({
  counter: countReducer,
  users: usersReduser,
});
const store = createStore(appReduser);
export default store;
