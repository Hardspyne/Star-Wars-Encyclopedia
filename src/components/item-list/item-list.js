import React from 'react';
import './item-list.css';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const ItemList = (props) => {
    const {spinner, error, data, onItemSelected, children: renderLabel, page, isNextPagePresent} = props;

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
        <div className={'item-list'}>
            <ul className='list-group'>
                {spinner}
                {renderedItems}
                {error}
            </ul>
            <div className="paging">
                <Link className={`prev ${!page || +page === 1 ? 'disabled' : ''}`} to={`?page=${+page - 1}`}>←
                    Prev</Link>
                <Link className={`next ${isNextPagePresent ? '' : 'disabled'}`} to={`?page=${+page + 1}`}>Next →</Link>
            </div>
        </div>);
};

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired,
    spinner: PropTypes.node,
    error: PropTypes.node
};

export default ItemList;