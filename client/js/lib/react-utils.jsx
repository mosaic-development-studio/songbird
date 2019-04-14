import React from 'react';

export const createSelectOptions = (value, keyString = '') => {
    return (
        <option className={value} key={keyString + value}>{value}</option>
    );
};