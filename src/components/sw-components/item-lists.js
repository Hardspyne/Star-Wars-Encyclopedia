import React from 'react';
import ItemList from '../item-list';
import {viewWithData} from '../hoc-helpers';
import SwApiService from "../../services/swapi-service";


const viewWithChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (<Wrapped {...props}>
            {fn}
        </Wrapped>)
    }
};

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({model, name}) => <span>{name}({model})</span>;
const swApiService = new SwApiService();
const {
    getAllPerson, getAllStarShips, getAllPlanets
} = swApiService;
const PersonList = viewWithData(viewWithChildFunction(ItemList, renderName),
    getAllPerson);

const PlanetList = viewWithData(viewWithChildFunction(ItemList,
    renderName), getAllPlanets);

const StarShipList = viewWithData(viewWithChildFunction(ItemList, renderNameAndModel),
    getAllStarShips);

export {
    PersonList,
    PlanetList,
    StarShipList
}