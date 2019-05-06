import ActionBar from '../components/ActionBar';
import { Provider } from 'react-redux';
import React from 'react';
import Staff from '../components/Staff';

export const Application = props => {
    const { store } = props;

    return (
        <Provider store={store}>
            <div className="staff-wrapper">
                <Staff/>
            </div>
            <ActionBar/>
        </Provider>
    );
};