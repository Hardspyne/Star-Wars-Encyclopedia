import React, {Component} from 'react';
import './random-planet.css';

export default class RandomPlanet extends Component {

    render() {

        return (<div className='media random-planet'>
                <img src="https://starwars-visualguide.com/assets/img/planets/5.jpg" alt='alt text'/>
                <div className='media-body'>
                    <h4>Planet name</h4>
                    <ul className='list-group-flush'>
                        <li className='list-group-item'>
                            Population
                            <span className='value'>
                                123124
                            </span>
                        </li>
                        <li className='list-group-item'>
                            Rotation Period
                            <span className='value'>
                                43
                            </span>
                        </li>
                        <li  className='list-group-item'>
                            Diameter
                            <span className='value'>
                                100
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}