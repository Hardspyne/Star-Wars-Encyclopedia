import React from 'react';
import {SwApiServiceConsumer} from "../swapi-service-context";

type mapSwapiServiceMethodsToPropsType = (swApiService: any) => {
    getData: (page: number) => any
    getAllCount?: () => number
};


const componentWithSwApiService = (mapMethodsToProps: mapSwapiServiceMethodsToPropsType) => <T extends { [prop: string]: any }>(Wrapped: React.ComponentType<T>) => {
    return (props: T) => {
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