import { addNote, removeNote } from '../actions/sketch';
import { connect } from 'react-redux';
import { getNoteStatus } from '../selectors';
import React from 'react';

export const Pitch = props => {
    const { active, bar, handleNoteEntry, pitch, pitchName, subdivision } = props;
    const className = `pitch${active ? ' pitch--active' : ''}`;

    return (
        <div
            className={className}
            onClick={() => handleNoteEntry({ bar, pitch, subdivision }, active)}
        >
            {pitchName}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: getNoteStatus(state, ownProps)
    };
};

const mapDispatchToProps = dispatch => ({
    handleNoteEntry: (noteDetails, active) => active
        ? dispatch(removeNote(noteDetails))
        : dispatch(addNote(noteDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pitch);