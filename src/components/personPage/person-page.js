import React, {Component} from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import './person-page.css';
import ErrorIndicator from "../error-indicator";

export default class PersonPage extends Component {


    state = {
        selectedPerson: null,
        isItemListLoaded: false,
        hasError: false
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
        });
    }

    render() {
        let errorIndicator = null;
        let personDetails = null;
        let itemList = null;


        if (this.state.hasError) {
            errorIndicator = (
                <ErrorIndicator/>
            );
        } else {
            personDetails = (
                <PersonDetails
                    personId={this.state.selectedPerson}
                    isItemListLoaded={this.state.isItemListLoaded}
                />
            );
            itemList = (
                <ItemList
                    onItemSelected={this.onPersonSelected}
                    onItemListLoaded={this.onItemListLoaded}
                />
            );
        }

        return (
            <div className="person-page-info">
                {errorIndicator}
                {itemList}
                {personDetails}
            </div>
        );
    }
}
