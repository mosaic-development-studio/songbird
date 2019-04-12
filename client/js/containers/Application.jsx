import { ActionBar } from '../components/ActionBar';
import { Provider } from 'react-redux';
import React from 'react';

export const Application = props => {
    const { store } = props;

    return (
        <Provider store={store}>
            <ActionBar/>
        </Provider>
    );
};