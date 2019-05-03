/*
    note = {
        name<Number>: 0,
        position<Number>: 12 (subdivision of 16th notes)
    }
*/
import { ADD_NOTE, REMOVE_NOTE } from '../constants/actions';

const initialState = [];

const addNote = (state, action) => {
    return [
        ...state,
        action.noteDetails
    ];
};

function removeNote(noteDetails) {
    return noteDetails.pitch !== this.pitch
        && noteDetails.subdivision !== this.subdivision;
}

export const sketch = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return addNote(state, action);
        case REMOVE_NOTE:
            return state.filter(removeNote, action.noteDetails);
        default:
            return state;
    }
};