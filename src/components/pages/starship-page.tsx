import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './page.css';
import PageRow from "../page-row";
import ErrorBoundary from "../error-boundary";
import {StarShipDetails, StarShipList} from '../sw-components';
import queryString from "query-string";
import {PagePropsType, PageStateType} from "./page-types.";

class StarShipPage extends Component<PagePropsType, PageStateType> {

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
        const startShipList = (<StarShipList
                page={page}
                onItemSelected={(itemId:string) => history.push(`/starships/${itemId}${page ? location.search : ''}`)}
                onItemListLoaded={this.onItemListLoaded}/>
        );

        const starShipDetails = (
            <StarShipDetails
                itemId={match.params.id}
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

export default withRouter(StarShipPage);
