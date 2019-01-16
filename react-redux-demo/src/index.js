import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducer';

const logAction = (store) => {
    return (next) => {
        return (action) => {
            console.log('middleware action: ', action);
            console.log('middleware next: ', next);

            const result = next(action);
            console.log('middleware result: ', result);

            return result;
        }
    }
}

// const store = createStore(reducer);
const store = createStore(reducer, applyMiddleware(logAction));

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
