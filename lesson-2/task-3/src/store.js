import { createStore } from 'redux';
import counterReduser from './users.reduser';

const store = createStore(counterReduser);
export default store;
