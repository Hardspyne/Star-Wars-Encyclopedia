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
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

export default class App extends Component {
    swApiService = new SwApiService();

    render() {

        return (
            <ErrorBoundary>
                <SwApiServiceProvider value={this.swApiService}>
                    <Router>
                        <div>
                            <Header/>
                            <RandomPlanet updateInterval={5000}/>
                            <Switch>
                                <Route path='/' exact render={() => (<h2>Welcome To StarDB</h2>)}/>
                                <Route path='/persons/:id?' component={PersonPage}/>
                                <Route path='/planets/:id?' component={PlanetPage}/>
                                <Route path='/starships/:id?' component={StarShipPage}/>
                                <Redirect to ='/'/>
                            </Switch>
                        </div>
                    </Router>
                </SwApiServiceProvider>
            </ErrorBoundary>
        );
    }
}