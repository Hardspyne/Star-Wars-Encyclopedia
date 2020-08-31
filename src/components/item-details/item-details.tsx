import React, {Component, Fragment, ReactElement} from 'react';
import './item-details.css';
import Spinner from "../spinner";


type ItemDetailsState = {
    item: any,
    loading: boolean,
    isItemListLoaded: boolean
};


type ItemDetailsProps = {
    item: any,
    itemId: string,
    isItemListLoaded: boolean,
    selectItemText: string,
    getData: (itemId: string) => any
};

export default class ItemDetails extends Component<ItemDetailsProps, ItemDetailsState> {

    state: ItemDetailsState = {
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


    componentDidUpdate(prevProps: ItemDetailsProps) {
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

        getData(itemId).then((item: unknown) => {
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
                (<span className='select-item-text smooth-appearance'>{this.props.selectItemText}</span>) : null;
        } else {
            itemDetails = <ItemView item={item}
                                    itemProperties={React.Children.map(this.props.children,
                                        (child) => React.cloneElement(child as ReactElement, {item}))}/>
        }

        return (<div className='media item-details'>
            {selectItem}
            {itemDetails}
            {spinner}
        </div>);
    }
}

const ItemView: React.FC<{
    item?: any,
    itemProperties?: any
}> = ({item: {imageUrl, name}, itemProperties} = {}) => {
    return (
        <Fragment>
            <img src={imageUrl} alt='alt text' className={'smooth-appearance'}/>
            <div className='media-body smooth-appearance'>
                <h4>{name}</h4>
                <ul className='list-group-flush'>
                    {itemProperties}
                </ul>
            </div>
        </Fragment>
    );
};


const ItemProperty: React.FC<{
    field: string,
    label: string,
    item?: any
}> = ({field, label, item}) => {
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
