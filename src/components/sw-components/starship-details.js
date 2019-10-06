import React from 'react';

import ItemDetails, {ItemProperty} from "../item-details";

import {componentWithSwApiService} from "../hoc-helpers";


const StarShipDetails = (props) => {
    return (<ItemDetails
        {...props}
    >
        <ItemProperty label={'Model'} field={'model'}/>
        <ItemProperty label={'Length'} field={'length'}/>
        <ItemProperty label={'Cost'} field={'costInCredits'}/>
    </ItemDetails>)
};

const mapMethodsToProps = (swApiService) => {
    return {
        getData: swApiService.getStarShip,
    }
};

export default componentWithSwApiService(mapMethodsToProps)(StarShipDetails);