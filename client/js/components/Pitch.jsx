import { addNote, removeNote } from '../actions/sketch';
import { connect } from 'react-redux';
import React from 'react';

export const Pitch = props => {
    const { pitch } = props;

    return (
        <div className="pitch" onClick={() => console.log(pitch)}>{pitch}</div>
    );
};

const mapStateToProps = {

};

const mapDispatchToProps = dispatch => {
    handleNoteEntry: () => {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pitch);