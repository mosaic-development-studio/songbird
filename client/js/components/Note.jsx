import React from 'react';

export const Note = props => {
    const { note } = props;

    return (
        <div className="note">{note}</div>
    );
};