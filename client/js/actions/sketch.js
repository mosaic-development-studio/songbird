import { ADD_NOTE, REMOVE_NOTE } from '../constants/actions';

export const addNote = noteDetails => ({
    type: ADD_NOTE,
    noteDetails
});

export const removeNote = noteDetails => ({
    type: REMOVE_NOTE,
    noteDetails
});