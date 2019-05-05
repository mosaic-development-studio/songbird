import { BASE64_REGEX } from '../constants/constants';

const convertBase64StringToState = base64String => JSON.parse(atob(base64String));

const convertStateToBase64String = state => btoa(JSON.stringify(state));

const getLocationPathname = () => window.location.pathname;

const isBase64Valid = base64Data => BASE64_REGEX.test(base64Data);

const isValidJSONString = string => {
    try {
        JSON.parse(string);
    }

    catch(e) {
        return false;
    }

    return true;
};

const checkValueAgainstType = (value, type) => {
    if (type === 'array') {
        return Array.isArray(value);
    }

    return typeof value === type;
};

const isStateValid = parsedJSON => {
    const keys = Object.keys(parsedJSON);

    return keys.reduce((isValid, key) => {
        switch(key) {
            case 'beatValue':
            case 'beatsPerMeasure':
            case 'tempo':
                return isValid && checkValueAgainstType(parsedJSON[key], 'number');
            case 'sketch':
                return isValid
                    && checkValueAgainstType(parsedJSON[key], 'array')
                    && parsedJSON[key].reduce((indexIsValidNote, noteDetails) => {
                        return indexIsValidNote && Object.keys(noteDetails).reduce(
                            (keyIsValid, prop) => {
                                switch(prop) {
                                    case 'bar':
                                    case 'subdivision':
                                        return keyIsValid && checkValueAgainstType(
                                            noteDetails[prop],
                                            'number'
                                        );
                                    case 'pitch':
                                        return keyIsValid && checkValueAgainstType(
                                            noteDetails[prop],
                                            'string'
                                        );
                                    default:
                                        return false;
                                }
                            }, true
                        ) && [
                            'bar',
                            'pitch',
                            'subdivision'
                        ].every(noteProp => ['bar', 'pitch', 'subdivision'].includes(noteProp));
                    }, true);
            default:
                return false;
        }
    }, true) && [
        'beatValue',
        'beatsPerMeasure',
        'sketch',
        'tempo'
    ].every(prop => keys.includes(prop));
};

export const instantiateApplicationStateFromPathname = defaultState => {
    const uriPathStringWithoutSlash = getLocationPathname().replace('/', '');

    if (
        uriPathStringWithoutSlash.length
            && isBase64Valid(uriPathStringWithoutSlash)
            && isValidJSONString(uriPathStringWithoutSlash)
    ) {
        const potentialState = convertBase64StringToState(uriPathStringWithoutSlash);

        if (isStateValid(potentialState)) {
            return potentialState;
        }
    }

    return defaultState;
};