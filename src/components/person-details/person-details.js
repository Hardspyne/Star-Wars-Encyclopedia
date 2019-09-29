import React, {Component, Fragment} from 'react';
import './person-details.css';
import SwApiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class PersonDetails extends Component {

    swApiService = new SwApiService();

    state = {
        person: null,
        loading: false,
        isItemListLoaded: false
    };


    componentDidMount() {
        this.setState({
            isItemListLoaded: this.props.isItemListLoaded
        });
        this.updatePerson();
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isItemListLoaded !== prevProps.isItemListLoaded) {
            this.setState({
                isItemListLoaded: this.props.isItemListLoaded
            });

        }
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const {personId} = this.props;
        if (!personId) {
            return;
        }
        this.setState({
            loading: true,
            isItemListLoaded: this.props.isItemListLoaded
        });

        this.swApiService.getPerson(personId).then(person => {
            this.setState({
                person,
                loading: false
            })
        });

    }

    render() {
        const {person, loading, isItemListLoaded} = this.state;

        let selectPerson = null;
        let spinner = null;
        let personDetails = null;

        if (loading) {
            spinner = <Spinner/>
        } else if (!person) {
            selectPerson = isItemListLoaded ?
                (<span className='selectPersonText'>Select person from a list</span>) : null;
        } else {
            personDetails = <PersonView person={person}/>
        }

        return (<div className='media person-details'>
            {selectPerson}
            {personDetails}
            {spinner}
        </div>);
    }
}

const PersonView = ({person: {imageUrl, name, gender, birthYear, eyeColor}} = {}) => {
    return (
        <Fragment>
            <img src={imageUrl} alt='alt text'/>
            <div className='media-body'>
                <h4>{name}</h4>
                <ul className='list-group-flush'>
                    <li className='list-group-item'>
                        Gender
                        <span className='value'>
                            {gender}
                            </span>
                    </li>
                    <li className='list-group-item'>
                        Birth Year
                        <span className='value'>
                            {birthYear}
                            </span>
                    </li>
                    <li className='list-group-item'>
                        Eye Color
                        <span className='value'>
                            {eyeColor}
                            </span>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};