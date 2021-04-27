import store from './customStore';
import { createBug } from './actions';

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(createBug("BUG 1"))
store.dispatch(createBug("BUG 2"))
store.dispatch(createBug("BUG 3"))
