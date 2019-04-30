import React from 'react';

export const createSelectOptions = (value, keyString = '') => {
    return (
        <option className={value} key={keyString + value}>{value}</option>
    );
};

export const createComponentList = (Component, count) => Array(count).fill(Component);