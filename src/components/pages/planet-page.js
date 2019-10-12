import React, {Component} from 'react';

import './page.css';
import PageRow from "../page-row";
import ErrorBoundary from "../error-boundary";
import {PlanetDetails, PlanetList} from '../sw-components';
import {withRouter} from 'react-router-dom';

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
        const {history, match} = this.props;

        const planetList = (<PlanetList
                onItemSelected={(itemId) => history.push(itemId)}
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

