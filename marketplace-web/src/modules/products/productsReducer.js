import { handleActions } from '@letapp/redux-actions';
import * as actions from './productsActions';

const INITIAL_STATE = {
    latest: {
        items: [],
        isLoading: false,
        isError: false,
        error: null,
    },
    add: {
        item: null,
        isLoading: false,
        isError: false,
        error: null,
    },
    images: {
        items: [],
        isLoading: false,
        isError: false,
        error: null,
    },
}

export default handleActions({
    [actions.fetchLatest.start]: (state) => ({
        ...state,
        latest: {
            ...state.latest,
            isLoading: true,
            error: null,
            isError: false,
        }              
    }),
    [actions.fetchLatest.success]: (state, actions) => ({
        ...state,
        latest: {
            ...state.latest,
            items: actions.payload,
            isLoading: false,
        },               
    }),
    [actions.fetchLatest.error]: (state, actions) => ({
        ...state,
        latest: {
            ...state.latest,
            isLoading: false,
            error: actions.payload,
            isError: true,
        }        
    }),
    [actions.addProduct.start]: (state) => ({
        ...state,
        add: {
            ...state.add,
            isLoading: true,
            error: null,
            isError: false,
        }              
    }),
    [actions.addProduct.success]: (state, actions) => ({
        ...state,
        add: {
            ...state.add,
            item: actions.payload,
            isLoading: false,
        },   
        images: {
            ...state.images,
            items: [],
            isLoading: false,
        },            
    }),
    [actions.addProduct.error]: (state, actions) => ({
        ...state,
        add: {
            ...state.add,
            isLoading: false,
            error: actions.payload,
            isError: true,
        }        
    }),
    [actions.addImage.start]: (state) => ({
        ...state,
        images: {
            ...state.images,
            isLoading: true,
            error: null,
            isError: false,
        }              
    }),
    [actions.addImage.success]: (state, actions) => ({
        ...state,
        images: {
            ...state.images,
            items: [...state.images.items, actions.payload],
            isLoading: false,
        },               
    }),
    [actions.addImage.error]: (state, actions) => ({
        ...state,
        images: {
            ...state.images,
            isLoading: false,
            error: actions.payload,
            isError: true,
        }        
    }),
}, INITIAL_STATE);