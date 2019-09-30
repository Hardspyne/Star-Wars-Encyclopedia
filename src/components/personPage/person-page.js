import React, {Component} from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails, {ItemProperty} from '../item-details/item-details';

import './person-page.css';
import SwApiService from "../../services/swapi-service";
import PageRow from "../PageRow";
import ErrorBoundary from "../error-boundary";

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
        const personDetails = (
            <ItemDetails
                itemId={this.state.selectedPerson}
                isItemListLoaded={this.state.isItemListLoaded}
                getData={this.swApiService.getPerson}
            >
                <ItemProperty label={'Gender'} field={'gender'}/>
                <ItemProperty label={'Birth Year'} field={'birthYerar'}/>
                <ItemProperty label={'Eye Color'} field={'eyeColor'}/>
            </ItemDetails>
        );
        const itemList = (
            <ItemList
                getData={this.swApiService.getAllPerson}
                onItemSelected={this.onPersonSelected}
                onItemListLoaded={this.onItemListLoaded}>
                {item => item.name}
            </ItemList>
        );

        return (
            <ErrorBoundary>
                <PageRow
                    left={itemList}
                    right={personDetails}
                />
            </ErrorBoundary>)
    }
}
