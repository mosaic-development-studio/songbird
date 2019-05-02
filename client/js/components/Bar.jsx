import { createComponentList } from '../lib/react-utils';
import { Position } from './Position';
import React from 'react';

export const Bar = props => {
    const { positionCount } = props;

    return (
        <div className="bar">
            {createComponentList(Position, positionCount).map((Position, i) => {
                return <Position key={'position-' + i} position={i}/>
            })}
        </div>
    );
};