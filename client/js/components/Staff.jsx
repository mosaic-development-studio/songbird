import { Bar } from '../components/Bar';
import { connect } from 'react-redux';
import { createComponentList } from '../lib/react-utils';
import { DEFAULT_BAR_COUNT } from '../constants/constants';
import { getTimeSignature } from '../selectors';
import { subdivisionsPerBar } from '../lib/subdivision-utils';
import React from 'react';

export const Staff = props => {
    const { timeSignature } = props;

    return (
        <div id="staff" className="staff">
            {createComponentList(Bar, DEFAULT_BAR_COUNT).map((Bar, i) => {
                const bar = i + 1;

                return (
                    <Bar
                        bar={bar}
                        key={`bar-${bar}`}
                        subdivisions={subdivisionsPerBar(timeSignature)}
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