import React, {Component} from 'react';
import Spinner from "../spinner";

const viewWithData = (View, getData) => {
    return class extends Component {
        state = {
            data: null
        };

        componentDidMount() {
            getData().then((data) => {
                this.setState({data});
                this.props.onItemListLoaded();
            })
        }

        render() {
            const {data} = this.state;
            let spinner = null;
            if (!data) {
                spinner = (<Spinner/>)
            }

            return <View {...this.props}
                data={data}
                spinner={spinner}
            />
        }
    }
};

export default viewWithData;