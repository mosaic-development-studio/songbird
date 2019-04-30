import { Application } from './containers/Application';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';

function start(config) {
    const {
        appRootElement,
        BaseApp,
        store
    } = config;

    ReactDOM.render(<BaseApp store={store}/>, appRootElement);
}

start({
    appRootElement: document.getElementById('root'),
    BaseApp: Application,
    store
});