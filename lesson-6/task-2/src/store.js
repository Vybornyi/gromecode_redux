import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './users/user.reducer';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action.type);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(userReducer, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;
