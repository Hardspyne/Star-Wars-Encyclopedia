import React from 'react';

import ItemDetails, {ItemProperty} from "../item-details";

import {componentWithSwApiService} from "../hoc-helpers";


const PlanetDetails = (props:any) => {
    return (<ItemDetails
        {...props}
    >
        <ItemProperty label={'Rotation Period'} field={'rotationPeriod'}/>
        <ItemProperty label={'Population'} field={'population'}/>
        <ItemProperty label={'Diameter'} field={'diameter'}/>
    </ItemDetails>)
};

const mapMethodsToProps = (swApiService:any) => {
    return {
        getData: swApiService.getPlanet,
    }
};

export default componentWithSwApiService(mapMethodsToProps)(PlanetDetails);