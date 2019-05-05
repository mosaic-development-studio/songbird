import { applyMiddleware, compose, createStore } from 'redux';
import { convertStateToBase64String, instantiateApplicationStateFromPathname } from './routing';
import { DEFAULT_APPLICATION_STATE } from './constants/constants';
import { reducer } from './reducers';

const transformStateForHash = state => {
    const {
        playbackController: {
            tempo,
            timeSignature: {
                beatValue,
                beatsPerMeasure
            }
        },
        sketch
    } = state;

    return {
        beatValue,
        beatsPerMeasure,
        sketch,
        tempo
    };
};

const stateToHashMiddleware = store => next => action => {
    next(action);

    const trimmedState = transformStateForHash(store.getState());
    const base64StateHash = convertStateToBase64String(trimmedState);

    window.history.pushState(trimmedState, 'currentSketch', base64StateHash);
};

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