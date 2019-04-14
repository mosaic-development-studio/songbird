import {
    RESET_CURRENT_TIME,
    SET_BEAT_VALUE,
    SET_BEATS_PER_MEASURE,
    SET_TEMPO,
    STOP,
    TOGGLE_NOTE_INPUT_TYPE,
    TOGGLE_PLAY_STATE
} from '../constants/actions';

export const resetCurrentTime = () => ({ type: RESET_CURRENT_TIME });

export const selectEraser = () => ({ type: SELECT_ERASER });

export const selectNoteInput = () => ({ type: SELECT_NOTE_INPUT });

export const setTempo = tempo => ({
    type: SET_TEMPO,
    tempo
});

export const setBeatValue = beatValue => ({
    type: SET_BEAT_VALUE,
    beatValue
});

export const setBeatsPerMeasure = beatsPerMeasure => ({
    type: SET_BEATS_PER_MEASURE,
    beatsPerMeasure
});

export const stop = () => ({ type: STOP });

export const toggleNoteInputType = () => ({ type: TOGGLE_NOTE_INPUT_TYPE });

export const togglePlayState = () => ({ type: TOGGLE_PLAY_STATE });