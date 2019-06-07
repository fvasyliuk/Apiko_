import * as actions from './chatsActions';
import Api from '../../api';
import { viewerOperations } from '../viewer';
import { normalize } from 'normalizr';
import { ChatCollection, Chat } from '../../api/schemas';

export function createChat(productId) {
    return async function createChatThunk(dispatch) {
        try {
            dispatch(actions.createChat.start());

            const res = await Api.Chats.createChat(productId); //(idProduct)

            const { result, entities } = normalize(res.data, Chat);

            dispatch(actions.createChat.success({ result, entities }));
        } catch (err) {
            console.log(err);
            dispatch(actions.createChat.error({ message: err.message }))
        }
    }
};

export function fetchChats() {
    return async function fetchThunk(dispatch) {
        try {
            dispatch(actions.fetchChats.start());

            const res = await Api.Chats.fetch();

            const { result, entities } = normalize(res.data, ChatCollection);

            dispatch(actions.fetchChats.success({ result, entities }));
        } catch (err) {
            console.log(err);
            dispatch(actions.fetchChats.error({ message: err.message }))
        }
    }
};