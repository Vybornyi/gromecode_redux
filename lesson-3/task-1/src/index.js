import store from './store';
import { decrement, increment, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(reset());
store.dispatch(decrement());
store.dispatch(
  addUser({
    id: 1,
    name: 'Ivan',
  }),
);
store.dispatch(
  addUser({
    id: 2,
    name: 'Lol',
  }),
);
store.dispatch(deleteUser(2));
store.dispatch(
  updateUser(1, {
    name: 'Ivanna',
  }),
);
store.dispatch(increment());