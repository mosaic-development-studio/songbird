import {
    PAUSE,
    PLAY,
    SET_TEMPO,
    SET_TIME_SIGNATURE,
    STOP,
    TOGGLE_NOTE_INPUT_TYPE
} from '../constants/actions';

export const pause = () => ({
    type: PAUSE
});

export const play = () => ({
    type: PLAY
});

export const setTempo = tempo => ({
    type: SET_TEMPO,
    tempo
});

export const setTimeSignature = timeSignature => ({
    type: SET_TIME_SIGNATURE,
    timeSignature
});
export const stop = () => ({
    type: STOP
});

export const  toggleNoteInputType = () => ({
    type: TOGGLE_NOTE_INPUT_TYPE
});