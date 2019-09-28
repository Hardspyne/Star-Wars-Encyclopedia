import React, {Component} from 'react';
import './person-details.css';

export default class PersonDetails extends Component {

    render() {

        return (<div className='media person-details'>
            <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt='alt text'/>
            <div className='media-body'>
                <h4>R2-D2</h4>
                <ul className='list-group-flush'>
                    <li className='list-group-item'>
                        Gender
                        <span className='value'>
                                mail
                            </span>
                    </li>
                    <li className='list-group-item'>
                        Birth Year
                        <span className='value'>
                                43
                            </span>
                    </li>
                    <li  className='list-group-item'>
                        Eye Color
                        <span className='value'>
                                red
                            </span>
                    </li>
                </ul>
            </div>
        </div>);
    }
}