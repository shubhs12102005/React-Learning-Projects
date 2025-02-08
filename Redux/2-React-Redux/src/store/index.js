import {createStore} from 'redux';

const INITIAL_VALUE = {
    counter: 0,
    privacy: false
}

// It updates store by action and initial value
const counterReducer = (store = INITIAL_VALUE, action) => {
    if(action.type === 'INCREMENT'){
        return {counter: store.counter + 1, privacy: store.privacy};
    } else if(action.type === 'DECREMENT'){
        return {counter: store.counter - 1, privacy: store.privacy};
    } else if(action.type === 'ADD'){
        return {counter: store.counter + Number(action.payload.num), privacy: store.privacy};
    } else if(action.type === 'SUBTRACT'){
        return {counter: store.counter - Number(action.payload.num), privacy: store.privacy};
    } else if(action.type === 'PRIVACY'){
        return {counter: store.counter, privacy: !store.privacy};
    }
    return store;
}

const counterStore = createStore(counterReducer);

export default counterStore;