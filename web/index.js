import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './App';
import store from '../lib/store';

const appElement = document.getElementById('app');

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(
        <Provider store={store}>
            <NextApp/>
        </Provider>
        , appElement);
    });
}

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , appElement);