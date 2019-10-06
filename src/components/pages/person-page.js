import React, {Component} from 'react';

import './page.css';
import PageRow from "../page-row";
import ErrorBoundary from "../error-boundary";

import {PersonDetails, PersonList} from '../sw-components';

export default class PersonPage extends Component {

    state = {
        selectedItem: null,
        isItemListLoaded: false
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id,
        })
    };

    onItemListLoaded = () => {
        this.setState({
            isItemListLoaded: true
        })
    };

    render() {
        const personList = (<PersonList
                onItemSelected={this.onItemSelected}
                onItemListLoaded={this.onItemListLoaded}/>
        );

        const personDetails = (
            <PersonDetails
                itemId={this.state.selectedItem}
                isItemListLoaded={this.state.isItemListLoaded}
                selectItemText={"Select person from a list"}
            />
        );

        return (
            <ErrorBoundary>
                <PageRow
                    left={personList}
                    right={personDetails}
                />
            </ErrorBoundary>)
    }
}
