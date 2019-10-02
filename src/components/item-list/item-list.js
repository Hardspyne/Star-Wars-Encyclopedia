import React from 'react';
import './item-list.css';
import viewWithData from "../hoc-helpers/view-with-data";
import SwApiService from "../../services/swapi-service";

const {getAllPerson} = new SwApiService();


const ItemList = (props) => {
    const {spinner, data, onItemSelected, children:renderLabel} = props;

    let renderedItems = null;
    if (data) {
        renderedItems = data.map(item => {
            const label = renderLabel(item);
            return (<li className='list-group-item'
                        key={item.id}
                        onClick={() => onItemSelected(item.id)}>
                {label}
            </li>)
        });
    }
    return (
        <ul className='item-list list-group'>
            {spinner}
            {renderedItems}
        </ul>);
};


export default viewWithData(ItemList, getAllPerson);