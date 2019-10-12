import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './page.css';
import PageRow from "../page-row";
import ErrorBoundary from "../error-boundary";
import {StarShipDetails, StarShipList} from '../sw-components';

class StarShipPage extends Component {

    state = {
        isItemListLoaded: false
    };

    onItemListLoaded = () => {
        this.setState({
            isItemListLoaded: true
        })
    };

    render() {
        const {history, match} = this.props;

        const startShipList = (<StarShipList
                onItemSelected={(itemId) => history.push(itemId)}
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
