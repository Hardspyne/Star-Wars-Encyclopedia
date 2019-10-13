import React, {Component} from 'react';
import './header.css';
import {Link, NavLink} from "react-router-dom";

export default class Header extends Component {

    state = {
        active: null
    };

    render() {
        const {active} = this.state;
        return (<div className='header'>
            <h3>
                <Link to={'/'}>
                    Start Wars DB
                </Link>
            </h3>
            <ul>
                <li className={active ==='persons'? 'active':''}>
                    <NavLink activeClassName='active' to={'/persons/'}>Persons</NavLink>
                </li>
                <li className={active ==='planets'? 'active':''}>
                    <NavLink activeClassName='active' to={'/planets/'}>Planets</NavLink>
                </li>
                <li className={active ==='starships'? 'active':''}>
                    <NavLink activeClassName='active' to={'/starships/'}>Starhsips</NavLink>
                </li>
            </ul>
        </div>);
    }
}