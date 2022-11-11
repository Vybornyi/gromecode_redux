import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import counterReducer from './counter.reducer';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
};
const appStore = combineReducers({
  counter: counterReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appStore, composeEnhancers(applyMiddleware(logger)));
export default store;
