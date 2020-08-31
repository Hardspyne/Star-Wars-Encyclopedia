import React from 'react';
import ItemList from '../item-list';
import {componentWithChildFunction, componentWithData, componentWithSwApiService} from '../hoc-helpers';
import {ItemListProps} from "../item-list/item-list";

const renderName = ({name}:{name:string}) => <span>{name}</span>;
const renderNameAndModel = ({model, name}:{model:string, name:string}) => <span>{name}({model})</span>;

const mapPersonMethodsToProps = (swApiService:any) => {
    return {
        getData: swApiService.getAllPerson,
        getAllCount: swApiService.getAllPersonsCount
    }
};

const mapPlanetMethodsToProps = (swApiService:any) => {
    return {
        getData: swApiService.getAllPlanets,
        getAllCount: swApiService.getAllPlanetsCount

    }
};

const mapStarShipMethodsToProps = (swApiService:any) => {
    return {
        getData: swApiService.getAllStarShips,
        getAllCount: swApiService.getAllStarShipsCount

    }
};

const PersonList = componentWithSwApiService(mapPersonMethodsToProps)(
    componentWithData(
        componentWithChildFunction(renderName)(
            ItemList)));

const PlanetList = componentWithSwApiService(mapPlanetMethodsToProps)(

    componentWithData(
        componentWithChildFunction(renderName)(
            ItemList)));

const StarShipList = componentWithSwApiService(mapStarShipMethodsToProps)(
    componentWithData(
        componentWithChildFunction(renderNameAndModel)(
            ItemList)));


export {
    PersonList,
    PlanetList,
    StarShipList
}