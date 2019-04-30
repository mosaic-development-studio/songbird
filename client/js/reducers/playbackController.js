import {
    RESET_CURRENT_TIME,
    SET_BEAT_VALUE,
    SET_BEATS_PER_MEASURE,
    SET_TEMPO,
    STOP,
    TOGGLE_NOTE_INPUT_TYPE,
    TOGGLE_PLAY_STATE
} from '../constants/actions';

const initialState = {
    currentTime: 0,
    erase: false,
    isPlaying: false,
    tempo: 100,
    timeSignature: {
        beatsPerMeasure: 4,
        beatValue: 4
    }
};

const resetCurrentTime = state => {
    return {
        ...state,
        currentTime: 0
    };
};

const setBeatValue = (state, action) => {
    return {
        ...state,
        timeSignature: {
            ...state.timeSignature,
            beatValue: +action.beatValue
        }
    };
};

const setBeatsPerMeasure = (state, action) => {
    return {
        ...state,
        timeSignature: {
            ...state.timeSignature,
            beatsPerMeasure: +action.beatsPerMeasure
        }
    };
};

const setTempo = (state, action) => {
    return {
        ...state,
        tempo: +action.tempo
    };
};

const stop = state => {
    return {
        ...state,
        currentTime: 0,
        isPlaying: false
    };
};

const toggleNoteInputType = state => {
    return {
        ...state,
        erase: !state.erase
    };
};

const togglePlayState = state => {
    return {
        ...state,
        isPlaying: !state.isPlaying
    };
};

export const playbackController = (state = initialState, action) => {
    switch (action.type) {
        case RESET_CURRENT_TIME:
            return resetCurrentTime(state);
        case SET_BEAT_VALUE:
            return setBeatValue(state, action);
        case SET_BEATS_PER_MEASURE:
            return setBeatsPerMeasure(state, action);
        case SET_TEMPO:
            return setTempo(state, action);
        case STOP:
            return stop(state);
        case TOGGLE_NOTE_INPUT_TYPE:
            return toggleNoteInputType(state);
        case TOGGLE_PLAY_STATE:
            return togglePlayState(state);
        default:
            return state;
    }
};