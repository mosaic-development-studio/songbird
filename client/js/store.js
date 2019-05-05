import { applyMiddleware, compose, createStore } from 'redux';
import { instantiateApplicationStateFromPathname } from './routing';
import { DEFAULT_APPLICATION_STATE } from './constants/constants';
import { reducer } from './reducers';
import { stateToHashMiddleware } from './routing';

export const store = createStore(
    reducer,
    instantiateApplicationStateFromPathname(DEFAULT_APPLICATION_STATE),
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? compose(
            applyMiddleware(stateToHashMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
        : applyMiddleware(stateToHashMiddleware)
);