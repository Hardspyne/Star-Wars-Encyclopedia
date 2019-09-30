import React, {Component} from 'react';
import './item-list.css';
import Spinner from "../spinner";

export default class ItemList extends Component {
    state = {
        itemList: null
    };

    componentDidMount() {
        const {getData} = this.props;
        getData().then((itemList) => {
            this.setState({itemList});
            this.props.onItemListLoaded();
        })
    }

    renderItems(itemList) {
        return itemList.map(item => {
            const label = this.props.children(item);
           return (<li className='list-group-item'
                 key={item.id}
                 onClick={() => this.props.onItemSelected(item.id)}>
               {label}
            </li>)
    });
    }

    render() {
        const {itemList} = this.state;

        let spinner = null;
        let renderedItems = null;

        if (!itemList) {
            spinner = (<Spinner/>)
        } else {
            renderedItems = this.renderItems(itemList);
        }

        return (
            <ul className='item-list list-group'>
                {spinner}
                {renderedItems}
            </ul>);
    }
}