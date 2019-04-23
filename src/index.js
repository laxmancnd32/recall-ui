import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/router';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers';
import "./index.css";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);

