import React, {Component} from 'react';

import './page.css';
import PageRow from "../page-row";
import ErrorBoundary from "../error-boundary";

import {PersonDetails, StarShipDetails, StarShipList} from '../sw-components';

export default class StarShipPage extends Component {

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

        const startShipList = (<StarShipList
                onItemSelected={this.onItemSelected}
                onItemListLoaded={this.onItemListLoaded}/>
        );

        const starShipDetails = (
            <StarShipDetails
                itemId={this.state.selectedItem}
                isItemListLoaded={this.state.isItemListLoaded}
                selectItemText={"Select starship from a list"}
            />
        );

        return (
            <ErrorBoundary>
                <PageRow
                    left={startShipList}
                    right={starShipDetails}
                />
            </ErrorBoundary>)
    }
}
