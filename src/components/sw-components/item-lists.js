import React from 'react';
import ItemList from '../item-list';
import {componentWithChildFunction, componentWithData, componentWithSwApiService} from '../hoc-helpers';

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({model, name}) => <span>{name}({model})</span>;

const mapPersonMethodsToProps = (swApiService) => {
    return {
        getData: swApiService.getAllPerson,
        getAllCount: swApiService.getAllPersonsCount
    }
};

const mapPlanetMethodsToProps = (swApiService) => {
    return {
        getData: swApiService.getAllPlanets,
        getAllCount: swApiService.getAllPlanetsCount

    }
};

const mapStarShipMethodsToProps = (swApiService) => {
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