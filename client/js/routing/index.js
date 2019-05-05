import {
    basicURIPathValidators,
    convertBase64StringToState,
    isBase64Valid,
    isStateValid,
    isValidJSONString
} from './validators';
import { transformStateForHash, transformTrimmedStatetoState } from '../transformers';

export const convertStateToBase64String = state => btoa(JSON.stringify(state));

const getLocationPathname = () => window.location.pathname;

export const instantiateApplicationStateFromPathname = defaultState => {
    const uriPathStringWithoutSlash = getLocationPathname().replace('/', '');

    if (basicURIPathValidators(uriPathStringWithoutSlash, [
        isBase64Valid, isValidJSONString
    ])) {
        const potentialState = convertBase64StringToState(uriPathStringWithoutSlash);

        if (isStateValid(potentialState)) {
            return transformTrimmedStatetoState(potentialState, defaultState);
        }
    }

    return defaultState;
};

export const stateToHashMiddleware = store => next => action => {
    next(action);

    const trimmedState = transformStateForHash(store.getState());
    const base64StateHash = convertStateToBase64String(trimmedState);

    window.history.pushState(trimmedState, 'currentSketch', base64StateHash);
};