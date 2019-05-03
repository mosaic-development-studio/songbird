import { createComponentList } from '../lib/react-utils';
import Pitch from './Pitch';
import { PITCH_TABLE, REVERSED_PITCH_TABLE_KEYS } from '../constants/constants';
import React from 'react';

export const Subdivision = props => {
    const { bar, subdivision, subdivisions } = props;
    const pitch = REVERSED_PITCH_TABLE_KEYS[subdivision];
    const pitchName = PITCH_TABLE[pitch]

    return (
        <tr className="subdivision-row">
            {createComponentList(Pitch, subdivisions).map((Pitch, i) => {
                return (
                    <td className="subdivision" key={i}>
                        <Pitch bar={bar} pitch={pitch} pitchName={pitchName} subdivision={i}/>
                    </td>
                );
            })}
        </tr>
    );
};