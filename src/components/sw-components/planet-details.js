import React from 'react';

import ItemDetails, {ItemProperty} from "../item-details";

import {componentWithSwApiService} from "../hoc-helpers";


const PlanetDetails = (props) => {
    return (<ItemDetails
        {...props}
    >
        <ItemProperty label={'Rotation Period'} field={'rotationPeriod'}/>
        <ItemProperty label={'Population'} field={'population'}/>
        <ItemProperty label={'Diameter'} field={'diameter'}/>
    </ItemDetails>)
};

const mapMethodsToProps = (swApiService) => {
    return {
        getData: swApiService.getPlanet,
    }
};

export default componentWithSwApiService(mapMethodsToProps)(PlanetDetails);