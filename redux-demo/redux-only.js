const { createStore } = require('redux');

const initialState = {
    name: 'Johnny',
    age: 21
}

// Reducer
const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type) {
        case 'ADD_AGE':
            newState.age += action.val;
            break;
        case 'SUBSTRACT_AGE':
            newState.age -= action.val;
            break;
    }

    return newState;
}

// Store.js
const store = createStore(reducer);

store.subscribe(() => {
    console.log('The age change to:', store.getState());
})

console.log('The initial age is:', store.getState());

// Below are our business logic
store.dispatch({type: 'ADD_AGE', val: 10});
store.dispatch({type: 'SUBSTRACT_AGE', val: 5});
