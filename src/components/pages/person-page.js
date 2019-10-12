import React, {Component} from 'react';
import './page.css';
import PageRow from "../page-row";
import ErrorBoundary from "../error-boundary";
import {PersonDetails, PersonList} from '../sw-components';
import {withRouter} from 'react-router-dom';

class PersonPage extends Component {

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

        const personList = (<PersonList
                onItemSelected={(itemId) => history.push(itemId)}
                onItemListLoaded={this.onItemListLoaded}/>
        );

        const personDetails = (
            <PersonDetails
                itemId={match.params.id}
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

export default withRouter(PersonPage);
