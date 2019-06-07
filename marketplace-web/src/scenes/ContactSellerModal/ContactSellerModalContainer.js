import { connect } from 'react-redux';
import { compose, withState, withHandlers, withProps } from 'recompose';
import { productsOperations, productsSelectors } from '../../modules/products';
import { chatsOperations } from '../../modules/chats';
import ContactSellerModalView from './ContactSellerModalView';
import { messagesOperations } from '../../modules/messages';


const mapStateToProps = (state, { productId }) => ({
    isLoading: state.products.latest.isLoading,
    product: productsSelectors.getProduct(state, productId),
    owner: productsSelectors.getProductOwner(state, productId),
});

const mapDispatchToProps = {
    createChat: chatsOperations.createChat, 
    sendMessage: messagesOperations.sendMessage,
}

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('text', 'setText', ''),
    withHandlers({
        submit: (props) => () => {
            if (!props.product.chatId) {
                props.createChat(props.product.id);
            }

            //TODO: Send message and navigate to chat
        },
    }),
    withProps((props) => ({
        disabled: props.text.trim().length === 0,
    }))
);

export default enhancer(ContactSellerModalView)