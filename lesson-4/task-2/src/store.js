/* eslint-disable prettier/prettier */
import { createStore } from 'redux';

import usersReduser from './users/users.reducer';


const store = createStore(usersReduser)

export default store;
