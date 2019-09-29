import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import PersonPage from "../personPage/person-page";

export default class App extends Component {

    state = {
        hasError: false,
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <div className='main-page-error'>
                <ErrorIndicator/>
            </div>
        }

        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <PersonPage/>
            </div>
        );
    }
}