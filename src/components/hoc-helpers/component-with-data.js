import React, {Component} from 'react';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const componentWithData = (Wrapped) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false,
        };

        componentDidMount() {
            this.update();
        }

        update() {
            this.props.getData().then((data) => {
                this.setState({data, loading: false});
                this.props.onItemListLoaded();
            }).catch(() => {
                this.setState({error: true, loading: false})
            })
        }

        render() {
            const {data, loading, error} = this.state;
            let spinner;
            let errorView;
            if (loading) {
                spinner = (<Spinner/>)
            }
            if (error) {
                errorView = (<ErrorIndicator/>)
            }

            return <Wrapped {...this.props}
                            data={data}
                            spinner={spinner}
                            error={errorView}
            />
        }
    }
};

export default componentWithData;