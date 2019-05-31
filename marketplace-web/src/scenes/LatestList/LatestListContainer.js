import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { productsOperations } from '../../modules/products';
import LatestListView from './LatestListView';

const mapStateToProps = (state) => ({
    list: state.products.latest.items,
    isLoading: state.products.latest.isLoading,
});

const mapDispatchToProps = {
    fetchLatest: productsOperations.fetchLatest,
}

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            this.props.fetchLatest();
        }
    })
);

export default enhancer(LatestListView)