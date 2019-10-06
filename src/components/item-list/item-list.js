import React from 'react';
import './item-list.css';

const ItemList = (props) => {
    const {spinner, error, data, onItemSelected, children: renderLabel} = props;

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
            {error}
        </ul>);
};


export default ItemList;