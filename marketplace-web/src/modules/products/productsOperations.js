import * as actions from './productsActions';
import Api from '../../api';

export function fetchLatest() {
    return async function fetchLatestThunk(dispatch) {
        try {
            dispatch(actions.fetchLatest.start());

            const res = await Api.Products.getLatest();

            dispatch(actions.fetchLatest.success(res.data));
        } catch (err) {
            console.log(err);
            dispatch(actions.fetchLatest.error({ message: err.message }))
        }
    }
};

export function addProduct(body) {
    return async function addProductThunk(dispatch) {
        try {
            dispatch(actions.addProduct.start());
            
            const res = await Api.Products.add(body);
            
            dispatch(actions.addProduct.success(res.data));
        } catch (err) {
            console.log(err);
            dispatch(actions.addProduct.error({ message: err.message }))
        }
    }
};

export function uploadImage(file) {
    return async function uploadImageThunk(dispatch) {
        try {
            dispatch(actions.addImage.start());

            const res = await Api.Images.upload(file);
        
            console.log({res});

            dispatch(actions.addImage.success(res.data));
        } catch (err) {
            console.log(err);
            dispatch(actions.addImage.error({ message: err.message }))
        }
    }
};