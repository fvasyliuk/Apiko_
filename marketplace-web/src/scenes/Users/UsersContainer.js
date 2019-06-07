import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import UsersView from './UsersView';
import { withRouter } from 'react-router-dom';
import { productsOperations, productsSelectors } from '../../modules/products';


function mapStateToProps(state, props) {
    return {
        productsList: productsSelectors.getUserProducts(state, props.match.params.id),
        user: productsSelectors.getUser(state, props.match.params.id),
        isLoading: state.products.usersProducts.isLoading,
    };
};

const mapDispatchToProps = {
    fetchUserProducts: productsOperations.fetchUserProducts,
    fetchUser: productsOperations.fetchProduct,

};

const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            if (!this.props.productsList) {
                this.props.fetchUserProducts(this.props.match.params.id);
            }else if (!this.props.user) {
                this.props.fetchUser(this.props.productsList[0]);
            }
        }
    }),
    withHandlers({
        handleCharsName: (props) => (fullName) => fullName.split(' ').reduce((acc, it)=>acc+it[0],'')
    })
);

export default enhancer(UsersView);