import React, {Component} from 'react';
import './header.css';

export default class Header extends Component {

    render() {

        return (<div className='header'>
            <h3>
                <a href='#'>
                    Start Wars DB
                </a>
            </h3>
            <ul>
                <li>
                    <a href='#'>People</a>
                </li>
                <li>
                    <a href='#'>Planets</a>
                </li>
                <li>
                    <a href='#'>Startships</a>
                </li>
            </ul>
        </div>);
    }
}