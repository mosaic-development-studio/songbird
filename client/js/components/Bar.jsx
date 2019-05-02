import { createComponentList } from '../lib/react-utils';
import { Subdivision } from './Subdivision';
import React from 'react';

export const Bar = props => {
    const { subdivisions } = props;

    return (
        <div className="bar">
            {createComponentList(Subdivision, subdivisions).map((Subdivision, i) => {
                return <Subdivision key={'subdivision-' + i} subdivision={i}/>
            })}
        </div>
    );
};