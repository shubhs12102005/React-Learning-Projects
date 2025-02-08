// External module for redux
const redux = require('redux');

// Initialize the store with a default state
const initialState = { counter: 0 };

const Reducer = (store = initialState, action) => {
    let newStore = store;
    if(action.type === 'INCREMENT'){
        newStore = { counter: store.counter + 1 };
    } else if (action.type === 'DECREMENT'){
        newStore = {counter: store.counter - 1};
    } else if (action.type === 'ADDITION'){
        newStore = {counter: store.counter + action.payload.number};
    }
    return newStore;
};

// Cretes a store
const store = redux.createStore(Reducer);

const subscriber = () => {
    const state = store.getState();
    console.log(state);
};

store.subscribe(subscriber);

// This is a action & it goes to Reducer
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'ADDITION', payload: {number: 10}});


/*
1. Store: it is The central data structure in Redux that holds the state of your application.
2. Reducer: it is A pure function that specifies how the state changes in response to actions.
    Purpose:
   - Takes the current state and an action as arguments.
   - Returns a new state based on the action
   - It executed when dispatch is called

3. Subscriber: it is A function that gets called whenever the (state in the store changes).
4.  Dispatch: it is:The method used to send actions to the store or to the Reducer.
*/