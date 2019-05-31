import { connect } from 'react-redux';
import { compose, withProps, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import { productsOperations } from '../../modules/products';
import AddProductView from './AddProductView';
import { routes } from '../router';
import * as Yup from 'yup';

const mapStateToProps = (state) => ({
    imagesList: state.products.images.items,
    isLoadingImg: state.products.images.isLoading,
});

const mapDispatchToProps = {
    addProduct: productsOperations.addProduct,
    uploadImg: productsOperations.uploadImage,
}


export const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withHandlers({
        onSubmit: (props) => async (body)=> { 
            const newBody ={...body};
            newBody.photos = props.imagesList;   
            await props.addProduct(newBody);
            props.history.push(routes.home);
        },
        uploadImage: (props) => (evt) => props.uploadImg(evt.target.files[0])
    }),
    withProps({
        initialValues: {
            title: '',
            location: '',
            description: '', 
            price: '',
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('required'),
            location: Yup.string().required('required'),
            price: Yup.number('number field').required('required'),
        })
    }),
);


export default enhancer(AddProductView)