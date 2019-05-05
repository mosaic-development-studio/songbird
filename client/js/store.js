import { createStore } from 'redux';
import { DEFAULT_APPLICATION_STATE } from './constants/constants';
import { instantiateApplicationStateFromPathname } from './routing';
import { reducer } from './reducers';

export const store = createStore(
    reducer,
    instantiateApplicationStateFromPathname(DEFAULT_APPLICATION_STATE),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);