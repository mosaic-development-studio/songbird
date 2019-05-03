import { createComponentList } from '../lib/react-utils';
import Pitch from './Pitch';
import { PITCH_TABLE, REVERSED_PITCH_TABLE_KEYS } from '../constants/constants';
import React from 'react';

export const Subdivision = props => {
    const { bar, subdivision, subdivisions } = props;
    const pitch = PITCH_TABLE[REVERSED_PITCH_TABLE_KEYS[subdivision]];

    return (
        <tr>
            {createComponentList(Pitch, subdivisions).map((Pitch, i) => {
                return (
                    <td className="subdivision" key={i}>
                        <Pitch bar={bar} pitch={pitch} subdivision={i}/>
                    </td>
                );
            })}
        </tr>
    );
};