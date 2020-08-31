import React, {ReactElement} from 'react';
import './item-list.css';
import PropTypes, {ReactNodeLike} from 'prop-types';
import {Link} from "react-router-dom";

export type ItemListProps = {
    spinner: ReactNodeLike,
    error: ReactNodeLike,
    data: any,
    onItemSelected: any,
    children: (...args: any[]) => any,
    page: number,
    isNextPagePresent: boolean
};

const ItemList: React.FC<ItemListProps> = (props) => {
    const {spinner, error, data, onItemSelected, children: renderLabel, page, isNextPagePresent} = props;

    let renderedItems = null;
    if (data) {
        renderedItems = data.map((item:{ id: string }) => {
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