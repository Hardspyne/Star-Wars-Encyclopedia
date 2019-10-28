import React, {Component} from 'react';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const componentWithData = (Wrapped) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false,
            page: 1,
            pageSize: 10,
            allCount: null,
            isNextPagePresent: true
        };

        componentDidMount() {
            this.update();
        }


        componentDidUpdate(prevProps, prevState, snapshot) {
            if (prevProps.page !== this.props.page) {
                this.setState({loading: true, data: null, error: false});
                this.update();
            }
        }

        update = async () => {
            try {
                const page = this.props.page ? this.props.page : this.state.page;

                if (!this.state.allCount) {
                    const allCount = await this.props.getAllCount();
                    this.setState({allCount});
                }

                const data = await this.props.getData(page);
                const isNextPagePresent = this.isNextPagePresent(page);
                this.setState({data, loading: false, page, isNextPagePresent});
                this.props.onItemListLoaded();
            } catch (e) {
                console.log(e);
                this.setState({error: true, loading: false})
            }
        };


        isNextPagePresent = (page) => {
            const {allCount, pageSize} = this.state;
            console.log(this.state);
            console.log(allCount / (pageSize * (+page)));
            return allCount / (pageSize * (+page)) > 1;
        };

        render() {
            const {data, loading, error, page, isNextPagePresent} = this.state;
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
                            page={page}
                            isNextPagePresent={isNextPagePresent}
            />
        }
    }
};

export default componentWithData;