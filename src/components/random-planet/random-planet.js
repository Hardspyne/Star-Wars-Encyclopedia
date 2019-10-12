import React, {Component, Fragment} from 'react';
import './random-planet.css';
import SwApiService from '../../services/swapi-service';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import defaultImage from './planet-default.jpg';
import PropTypes from 'prop-types';


export default class RandomPlanet extends Component {

    swApiService = new SwApiService();

    static defaultProps = {
        updateInterval: 10000
    };
    static propTypes = {
        updateInterval: PropTypes.number
    };

    componentDidMount() {
        const {updateInterval} = this.props;
        this.updatePlanet();
        window.setInterval(this.updatePlanet, updateInterval);
    }

    state = {
        loading: true,
        hasError: false,
        planet: {}
    };

    updatePlanet = async () => {
        try {
            const count = await this.swApiService.getAllPlanetsCount();
            const id = Math.floor(Math.random() * count);
            const planet = await this.swApiService.getPlanet(id);
            this.onPlanetLoaded(planet);
        } catch (e) {
            this.onError(e);
        }
    };

    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false, hasError: false})

    };

    onError = (error) => {
        this.setState({hasError: true})
    };

    render() {
        const {planet, loading, hasError} = this.state;

        let errorIndicator = null;
        let spinner = null;
        let planetView = null;

        if (hasError) {
            errorIndicator = <ErrorIndicator/>;
        } else if (loading) {
            spinner = <Spinner/>
        } else {
            planetView = <PlanetVieW planet={planet}/>
        }


        return (<div className='media random-planet'>
                {errorIndicator}
                {spinner}
                {planetView}
            </div>
        );
    }
}


const PlanetVieW = ({planet: {imageUrl, name, population, rotationPeriod, diameter}} = {}) => {
    return (
        <Fragment>
            <img src={imageUrl == null ? defaultImage : imageUrl} alt='alt text'/>
            <div className='media-body'>
                <h4>{name}</h4>
                <ul className='list-group-flush'>
                    <li className='list-group-item'>
                        Population
                        <span className='value'>
                                    {population}
                            </span>
                    </li>
                    <li className='list-group-item'>
                        Rotation Period
                        <span className='value'>
                                {rotationPeriod}
                            </span>
                    </li>
                    <li className='list-group-item'>
                        Diameter
                        <span className='value'>
                                {diameter}
                            </span>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
};