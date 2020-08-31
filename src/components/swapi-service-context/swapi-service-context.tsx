import React from 'react';

const {Provider: SwApiServiceProvider, Consumer: SwApiServiceConsumer} = React.createContext<any>(null);

export {
    SwApiServiceConsumer,
    SwApiServiceProvider
};