import React, {Component} from 'react';
import './page.css';
import PageRow from "../page-row";
import ErrorBoundary from "../error-boundary";
import {PersonDetails, PersonList} from '../sw-components';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';
import {PagePropsType, PageStateType} from "./page-types.";




class PersonPage extends Component<PagePropsType, PageStateType> {

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
        let page = queryString.parse(location.search).page as string;
        const personList = (<PersonList
                page={page}
                onItemSelected={(itemId: string) => history.push(`/persons/${itemId}${page ? location.search : ''}`)}
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
