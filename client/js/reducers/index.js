import {
    PAUSE,
    PLAY,
    SET_TEMPO,
    SET_TIME_SIGNATURE,
    STOP,
    TOGGLE_NOTE_INPUT_TYPE
} from '../constants/actions';

const initialState = {
    currentTime: 0,
    erase: false,
    playing: false,
    tempo: 100,
    timeSignature: {
        beat: 4,
        bar: 4
    }
};

const setTempo = (state, action) => {
    return {
        ...state,
        tempo: action.tempo
    };
};

const setTimeSignature = (state, action) => {
    return {
        ...state,
        timeSignature: action.timeSignature
    };
};

const stop = state => {
    return {
        ...state,
        currentTime: 0,
        playing: false
    };
};

const toggleNoteInputType = state => {
    return {
        ...state,
        erase: !state.erase
    };
};

const toggleStateOfPlay = state => {
    return {
        ...state,
        playing: !state.playing
    };
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PAUSE:
        case PLAY:
            return toggleStateOfPlay(state);
        case SET_TEMPO:
            return setTempo(state, action);
        case SET_TIME_SIGNATURE:
            return setTimeSignature(state, action);
        case STOP:
            return stop(state);
        case TOGGLE_NOTE_INPUT_TYPE:
            return toggleNoteInputType(state);
        default:
            return state;
    }
};