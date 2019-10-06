import React, {Component} from 'react';

import './page.css';
import PageRow from "../page-row";
import ErrorBoundary from "../error-boundary";

import {PersonDetails, PlanetDetails, PlanetList} from '../sw-components';

export default class PlanetPage extends Component {

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

        const planetList = (<PlanetList
                onItemSelected={this.onItemSelected}
                onItemListLoaded={this.onItemListLoaded}/>
        );

        const planetDetails = (
            <PlanetDetails
                itemId={this.state.selectedItem}
                isItemListLoaded={this.state.isItemListLoaded}
                selectItemText={"Select planet from a list"}

            />
        );

        return (
            <ErrorBoundary>
                <PageRow
                    left={planetList}
                    right={planetDetails}
                />
            </ErrorBoundary>)
    }
}
