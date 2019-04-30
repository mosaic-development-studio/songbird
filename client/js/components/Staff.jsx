import { Bar } from '../components/Bar';
import { connect } from 'react-redux';
import { createComponentList } from '../lib/react-utils';
import { DEFAULT_BAR_COUNT } from '../constants/constants';
import { getTimeSignature } from '../selectors';
import React from 'react';

export const Staff = props => {
    const {
        timeSignature: { beatValue, beatsPerBar }
    } = props;

    return (
        <div id="staff" className="staff">
            {createComponentList(Bar, DEFAULT_BAR_COUNT).map((Bar, i) => {
                return <Bar key={'bar-' + (i + 1)}/>
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