import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonPage from "../personPage/person-page";
import ErrorBoundary from "../error-boundary";

export default class App extends Component {


    render() {

        return (
            <ErrorBoundary>
            <div>
                <Header/>
                <RandomPlanet/>
                <PersonPage/>
            </div>
            </ErrorBoundary>
        );
    }
}