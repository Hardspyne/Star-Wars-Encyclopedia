import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonPage from "../personPage/person-page";
import ErrorBoundary from "../error-boundary";
import {SwApiServiceProvider} from '../swapi-service-context';
import SwApiService from "../../services/swapi-service";

export default class App extends Component {
    swApiService = new SwApiService();

    render() {

        return (
            <ErrorBoundary>
                <SwApiServiceProvider value={this.swApiService}>
                    <div>
                        <Header/>
                        <RandomPlanet/>
                        <PersonPage/>
                    </div>
                </SwApiServiceProvider>
            </ErrorBoundary>
        );
    }
}