import { createStore, combineReducers } from 'redux';
import optionsReducer from './options/options.reducer';

const appStore = combineReducers({
  options: optionsReducer,
});

const store = createStore(appStore);
export default store;
