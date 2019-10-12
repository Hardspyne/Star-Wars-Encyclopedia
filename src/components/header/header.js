import React, {Component} from 'react';
import './header.css';
import {Link} from "react-router-dom";

export default class Header extends Component {

    render() {
        return (<div className='header'>
            <h3>
                <Link to={'/'}>
                    Start Wars DB
                </Link>
            </h3>
            <ul>
                <li>
                    <Link to={'/persons/'}>Persons</Link>
                </li>
                <li>
                    <Link to={'/planets/'}>Planets</Link>
                </li>
                <li>
                    <Link to={'/starships/'}>Starhsips</Link>
                </li>
            </ul>
        </div>);
    }
}