import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundary from "../error-boundary";
import {SwApiServiceProvider} from '../swapi-service-context';
import SwApiService from "../../services/swapi-service";
import PersonPage from "../pages/person-page";
import PlanetPage from "../pages/planet-page";
import StarShipPage from "../pages/starship-page";

export default class App extends Component {
    swApiService = new SwApiService();

    render() {

        return (
            <ErrorBoundary>
                <SwApiServiceProvider value={this.swApiService}>
                    <div>
                        <Header/>
                        <RandomPlanet updateInterval = {5000}/>
                        <PersonPage/>
                        <PlanetPage/>
                        <StarShipPage/>
                    </div>
                </SwApiServiceProvider>
            </ErrorBoundary>
        );
    }
}