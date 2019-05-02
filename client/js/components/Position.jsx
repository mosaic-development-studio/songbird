import { createComponentList } from '../lib/react-utils';
import { Note } from './Note';
import { NOTE_TABLE, NOTE_TABLE_KEYS, NOTE_TABLE_LENGTH } from '../constants/constants';
import React from 'react';

export const Position = props => {
    const { position } = props;

    return (
        <ul className="position" position={position}>
            {createComponentList(Note, NOTE_TABLE_LENGTH).map((Note, i) => {
                const key = NOTE_TABLE_KEYS[i];
                const note = NOTE_TABLE[key];

                return (
                    <li key={key}>
                        <Note
                            note={note}
                        />
                    </li>
                );
            })}
        </ul>
    );
};