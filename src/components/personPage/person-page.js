import React, {Component} from 'react';

import './person-page.css';
import SwApiService from "../../services/swapi-service";
import PageRow from "../PageRow";
import ErrorBoundary from "../error-boundary";

import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarShipDetails, StarShipList} from '../sw-components';

export default class PersonPage extends Component {
    swApiService = new SwApiService();

    state = {
        selectedPerson: null,
        isItemListLoaded: false
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        })
    };

    onItemListLoaded = () => {
        this.setState({
            isItemListLoaded: true
        })
    };

    render() {
        const personList = (<PersonList
                onItemSelected={this.onPersonSelected}
                onItemListLoaded={this.onItemListLoaded}/>
        );

        const startShipList = (<StarShipList
                onItemSelected={this.onPersonSelected}
                onItemListLoaded={this.onItemListLoaded}/>
        );

        const planetList = (<PlanetList
                onItemSelected={this.onPersonSelected}
                onItemListLoaded={this.onItemListLoaded}/>
        );

        const personDetails = (
            <PersonDetails
                itemId={this.state.selectedPerson}
                isItemListLoaded={this.state.isItemListLoaded}
            />
        );


        const planetDetails = (
            <PlanetDetails
                itemId={this.state.selectedPerson}
                isItemListLoaded={this.state.isItemListLoaded}
            />
        );


        const starShipDetails = (
            <StarShipDetails
                itemId={this.state.selectedPerson}
                isItemListLoaded={this.state.isItemListLoaded}
            />
        );

        return (
            <ErrorBoundary>
                <PageRow
                    left={personList}
                    right={personDetails}
                />
                <PageRow
                    left={startShipList}
                    right={starShipDetails}
                />
                <PageRow
                    left={planetList}
                    right={planetDetails}
                />
            </ErrorBoundary>)
    }
}
