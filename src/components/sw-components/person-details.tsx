import React from 'react';

import ItemDetails, {ItemProperty} from "../item-details";
import {componentWithSwApiService} from "../hoc-helpers";


const PersonDetails = (props:any) => {
    return (<ItemDetails
        {...props}
    >
        <ItemProperty label={'Gender'} field={'gender'}/>
        <ItemProperty label={'Birth Year'} field={'birthYear'}/>
        <ItemProperty label={'Eye Color'} field={'eyeColor'}/>
    </ItemDetails>)
};


const mapMethodsToProps = (swApiService:any) => {
    return {
        getData: swApiService.getPerson,
    }
};
export default componentWithSwApiService(mapMethodsToProps)(PersonDetails);