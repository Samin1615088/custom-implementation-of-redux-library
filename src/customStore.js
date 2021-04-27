import reducer from './reducer';

function createStore(reducer) {
    let state;
    let listeners = [];

    function getState() {
        return state;
    }

    function dispatch(action) {
        //call reducer 
        state = reducer(state, action);
        
        //notify changes using subscribe
        listeners.forEach(listener => {
            listener();
        });
    }

    function subscribe(listener){
        listeners.push(listener)
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
export default createStore(reducer)