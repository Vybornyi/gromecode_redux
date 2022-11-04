import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser } from './user.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('ua'));
store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(addProduct({ id: 8, name: 'apple' }));
store.dispatch(removeProduct(8));
store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(setUser({ name: 'Bobby' }));