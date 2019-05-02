import { createComponentList } from '../lib/react-utils';
import { Pitch } from './Pitch';
import { PITCH_TABLE, PITCH_TABLE_KEYS, PITCH_TABLE_LENGTH } from '../constants/constants';
import React from 'react';

export const Subdivision = props => {
    const { subdivision } = props;

    return (
        <ul className="subdivision" subdivision={subdivision}>
            {createComponentList(Pitch, PITCH_TABLE_LENGTH).map((Pitch, i) => {
                const key = PITCH_TABLE_KEYS[i];
                const pitch = PITCH_TABLE[key];

                return (
                    <li key={key}>
                        <Pitch
                            pitch={pitch}
                        />
                    </li>
                );
            })}
        </ul>
    );
};