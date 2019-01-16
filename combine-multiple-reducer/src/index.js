import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import reducer from './store/reducer';
import reducerA from './store/reducerA';
import reducerB from './store/reducerB';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const rooReducer = combineReducers({
    rA: reducerA,
    rB: reducerB
})

// const store = createStore(reducer);
const store = createStore(rooReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
