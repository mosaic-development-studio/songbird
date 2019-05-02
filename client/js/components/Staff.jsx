import { Bar } from '../components/Bar';
import { connect } from 'react-redux';
import { createComponentList } from '../lib/react-utils';
import { DEFAULT_BAR_COUNT } from '../constants/constants';
import { getTimeSignature } from '../selectors';
import { positionsPerBar } from '../lib/position-utils';
import React from 'react';

export const Staff = props => {
    const { timeSignature } = props;

    return (
        <div id="staff" className="staff">
            {createComponentList(Bar, DEFAULT_BAR_COUNT).map((Bar, i) => {
                const barNumber = i + 1;

                return (
                    <Bar
                        key={`bar-${barNumber}`}
                        positionCount={positionsPerBar(timeSignature)}
                    />
                );
            })}
        </div>
    );
};

const mapDispatchToProps = {

};

const mapStateToProps = state => {
    return {
        timeSignature: getTimeSignature(state)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Staff);