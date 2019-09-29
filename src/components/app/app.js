import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";

export default class App extends Component {

    state = {
        selectedPerson: null,
        isItemListLoaded: false,
        hasError: false,
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


    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <div className='main-info'>
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        onItemListLoaded={this.onItemListLoaded}
                    />
                    <PersonDetails
                        personId={this.state.selectedPerson}
                        isItemListLoaded={this.state.isItemListLoaded}
                    />
                </div>

            </div>
        );
    }
}