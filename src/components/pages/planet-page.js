import React, {Component} from 'react';

import './page.css';
import PageRow from "../page-row";
import ErrorBoundary from "../error-boundary";
import {PersonList, PlanetDetails, PlanetList} from '../sw-components';
import {withRouter} from 'react-router-dom';
import queryString from "query-string";

class PlanetPage extends Component {

    state = {
        isItemListLoaded: false
    };

    onItemListLoaded = () => {
        this.setState({
            isItemListLoaded: true
        })
    };

    render() {
        const {history, match, location} = this.props;
        let page = queryString.parse(location.search).page;

        const planetList = (<PlanetList
                page={page}
                onItemSelected={(itemId) => history.push(`/planets/${itemId}${page ? location.search : ''}`)}
                onItemListLoaded={this.onItemListLoaded}/>
        );

        const planetDetails = (
            <PlanetDetails
                itemId={match.params.id}
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

export default withRouter(PlanetPage);

