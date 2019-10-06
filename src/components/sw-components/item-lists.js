import React from 'react';
import ItemList from '../item-list';
import {componentWithChildFunction, componentWithData, componentWithSwApiService} from '../hoc-helpers';

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({model, name}) => <span>{name}({model})</span>;

const mapPersonMethodsToProps = (swApiService) => {
    return {
        getData: swApiService.getAllPerson
    }
};

const mapPlanetMethodsToProps = (swApiService) => {
    return {
        getData: swApiService.getAllPlanets
    }
};

const mapStarShipMethodsToProps = (swApiService) => {
    return {
        getData: swApiService.getAllStarShips
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