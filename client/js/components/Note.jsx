import React from 'react';

export const Note = props => {
    const { note, position } = props;

    return (
        <div className="note">{note}</div>
    );
};