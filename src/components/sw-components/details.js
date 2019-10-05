import React from 'react';

import ItemDetails, {ItemProperty} from "../item-details";
import SwApiService from "../../services/swapi-service";

const swApiService = new SwApiService();

const {getPerson, getPlanet, getStarShip} = swApiService;
const PersonDetails = ({itemId}) => {
 return (<ItemDetails
     itemId={itemId}
     isItemListLoaded={this.state.isItemListLoaded}
     getData={getPerson}
 >
     <ItemProperty label={'Gender'} field={'gender'}/>
     <ItemProperty label={'Birth Year'} field={'birthYear'}/>
     <ItemProperty label={'Eye Color'} field={'eyeColor'}/>
 </ItemDetails>)
};

const PlanetDetails = ({itemId}) => {
    return (<ItemDetails
        itemId={itemId}
        isItemListLoaded={this.state.isItemListLoaded}
        getData={getPlanet}
    >
        <ItemProperty label={'Rotation Period'} field={'rotationPeriod'}/>
        <ItemProperty label={'Population'} field={'population'}/>
        <ItemProperty label={'Diameter'} field={'diameter'}/>
    </ItemDetails>)
};

const StarShipDetails = ({itemId}) => {
    return (<ItemDetails
        itemId={itemId}
        isItemListLoaded={this.state.isItemListLoaded}
        getData={getStarShip}
    >
        <ItemProperty label={'Model'} field={'model'}/>
        <ItemProperty label={'Length'} field={'length'}/>
        <ItemProperty label={'Cost'} field={'costInCredits'}/>
    </ItemDetails>)
};

export {
    PersonDetails,
    PlanetDetails,
    StarShipDetails
}