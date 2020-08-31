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
import MainPage from "../main-page";
import Spinner from "../spinner";

export default class App extends Component {
    swApiService = new SwApiService();

    state = {
        isLoading: true
    };

    componentDidMount() {
        this.setState({isLoading: false})
    }



    render() {


        return this.state.isLoading ? <Spinner/>
            : (
            <ErrorBoundary>
                <SwApiServiceProvider value={this.swApiService}>
                    <Router basename={process.env.PUBLIC_URL}>
                        <div>
                            <Header/>
                            <RandomPlanet updateInterval={10000}/>
                            <Switch>
                                <Route path='/' exact component={MainPage}/>
                                <Route path='/persons/:id?' component={PersonPage}/>
                                <Route path='/planets/:id?' component={PlanetPage}/>
                                <Route path='/starships/:id?' component={StarShipPage}/>
                                <Redirect to='/'/>
                            </Switch>
                        </div>
                    </Router>
                </SwApiServiceProvider>
            </ErrorBoundary>
        );
    }
}