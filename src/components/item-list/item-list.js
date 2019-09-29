import React, {Component} from 'react';
import './item-list.css';
import SwApiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {

    swApiService = new SwApiService();

    state = {
        personList: null
    };

    componentDidMount() {
        this.swApiService.getAllPerson().then((personList) => {
            this.setState({personList});
            this.props.onItemListLoaded();
        })
    }

    renderItems(itemList) {
        return itemList.map(item =>
            (<li className='list-group-item'
                 key={item.id}
                 onClick={() => this.props.onItemSelected(item.id)}>
                {item.name}
            </li>))
    }

    render() {
        const {personList} = this.state;

        let spinner = null;
        let renderedItems = null;

        if (!personList) {
            spinner = (<Spinner/>)
        } else {
            renderedItems = this.renderItems(personList);
        }

        return (
            <ul className='item-list list-group'>
                {spinner}
                {renderedItems}
            </ul>);
    }
}