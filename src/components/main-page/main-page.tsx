import React from 'react';
import './main-page.css';
import planetImage from './planet.jpg'
import starShipImage from './starship.png';
import personImage from './person.png';
import {Link} from "react-router-dom";


const MainPage = () => {
    const {useState} = React;
    const [loading, setLoading] = useState(true);

    return (<div style={{display: loading ? "none" : "flex"}} className='main-page smooth-appearance'>
        <h2>Welcome to the Star Wars DB</h2>
        <p>This is a small star wars encyclopedia based on the <a href='https://swapi.co/'>Star Wars API.</a></p>
        <h5 className='advise'>Please select category:</h5>
        <div className='category'>
            <Link to={'/persons'} className='category-item'>
                <img alt='persons' src={personImage}/>
                <span>Persons</span>
            </Link>
            <Link to={'/planets'} className='category-item'>
                <img alt='planet' src={planetImage}/>
                <span>Planets</span>
            </Link>
            <Link to={'/starships'} className='category-item'>
                <img onLoad={() => {
                    setLoading(false)
                }} alt='starhsips' src={starShipImage}/>
                <span>Starships</span>
            </Link>
        </div>
    </div>)
};

export default MainPage;