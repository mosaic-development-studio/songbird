import { createComponentList } from '../lib/react-utils';
import { PITCH_TABLE_LENGTH } from '../constants/constants';
import { Subdivision } from './Subdivision';
import React from 'react';

export const Bar = props => {
    const { bar, subdivisions } = props;

    return (
        <table className="bar">
            <tbody>
                {createComponentList(Subdivision, PITCH_TABLE_LENGTH).map((Subdivision, i) => {
                    return (
                        <Subdivision
                            bar={bar}
                            key={'subdivision-' + i}
                            subdivision={i}
                            subdivisions={subdivisions}
                        />
                    );
                })}
            </tbody>
        </table>
    );
};