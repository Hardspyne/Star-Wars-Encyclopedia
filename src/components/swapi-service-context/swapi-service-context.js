import React from 'react';

const {Provider: SwApiServiceProvider, Consumer: SwApiServiceConsumer} = React.createContext();

export {
    SwApiServiceConsumer,
    SwApiServiceProvider
};