import React from 'react';
import {SwApiServiceConsumer} from "../swapi-service-context";

const componentWithSwApiService = (mapMethodsToProps) => (Wrapped) => {
    return (props) => {
        return (<SwApiServiceConsumer>
            {
                (swApiService) => {
                    const serviceProps = mapMethodsToProps(swApiService);
                    return (<Wrapped {...props} {...serviceProps}/>);
                }}
        </SwApiServiceConsumer>)
    }
};

export default componentWithSwApiService;