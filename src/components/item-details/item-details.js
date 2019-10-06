import React, {Component, Fragment} from 'react';
import './item-details.css';
import Spinner from "../spinner";

export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: false,
        isItemListLoaded: false
    };


    componentDidMount() {
        this.setState({
            isItemListLoaded: this.props.isItemListLoaded
        });
        this.updateItem();
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isItemListLoaded !== prevProps.isItemListLoaded) {
            this.setState({
                isItemListLoaded: this.props.isItemListLoaded
            });

        }
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }
        this.setState({
            loading: true,
            isItemListLoaded: this.props.isItemListLoaded
        });

        getData(itemId).then(item => {
            this.setState({
                item,
                loading: false
            })
        });

    }

    render() {
        const {item, loading, isItemListLoaded} = this.state;

        let selectItem = null;
        let spinner = null;
        let itemDetails = null;

        if (loading) {
            spinner = <Spinner/>
        } else if (!item) {
            selectItem = isItemListLoaded ?
                (<span className='select-item-text'>{this.props.selectItemText}</span>) : null;
        } else {
            itemDetails = <ItemView item={item}
                                    itemProperties={React.Children.map(this.props.children,
                                        (child) => React.cloneElement(child, {item}))}/>
        }

        return (<div className='media item-details'>
            {selectItem}
            {itemDetails}
            {spinner}
        </div>);
    }
}

const ItemView = ({item: {imageUrl, name}, itemProperties} = {}) => {
    return (
        <Fragment>
            <img src={imageUrl} alt='alt text'/>
            <div className='media-body'>
                <h4>{name}</h4>
                <ul className='list-group-flush'>
                    {itemProperties}
                </ul>
            </div>
        </Fragment>
    );
};


const ItemProperty = ({field, label, item}) => {
    return (
        <li className='list-group-item'>
            {label}
            <span className='value'>
                {item[field]}
            </span>
        </li>
    )
};

export {
    ItemProperty
}
