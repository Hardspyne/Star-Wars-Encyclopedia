import React from 'react';
import './item-list.css';
import PropTypes from 'prop-types';

const ItemList = (props) => {
    const {spinner, error, data, onItemSelected, children: renderLabel} = props;

    let renderedItems = null;
    if (data) {
        renderedItems = data.map(item => {
            const label = renderLabel(item);
            return (<li className='list-group-item'
                        key={item.id}
                        onClick={() => onItemSelected(item.id)}>
                <span className={'smooth-appearance'}>{label}</span>
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

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired,
    spinner: PropTypes.node,
    error: PropTypes.node
};

export default ItemList;