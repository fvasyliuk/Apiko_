import React from 'react';
import T from 'prop-types';
import Modal from 'react-modal';
import { Icon } from '../../atoms';
import { UserCard } from './components';
import s from './Product.module.scss';
import ContactSellerModal from '../ContactSellerModal/ContactSellerModalContainer';


Modal.setAppElement('#root');

function Product({ 
    product, 
    owner, 
    isLoading,  
    isModalOpen,
    toggleModal, 
}) {
    const shouldShowLoading = isLoading || !owner;

    if (!product) {
        return <div>Loading ...</div>
    }

    return (
        <div className={s.container}>
            <div className={s.productContainer}>       
                <div className={s.photoContainer}>                
                    { product.price }
                </div>
                <div className={s.titleContainer}>   
                    { product.title }
                    <div className={s.createdInfo}>
                        { product.createdAt }
                    </div>                                
                </div>
                <div className={s.locationContainer}> 
                    <div className={s.iconLocation}>
                        <Icon name="location_filled.svg" />
                    </div>
                    { product.location }                               
                </div>
                <div className={s.descriptionContainer}>                
                    { product.description }
                </div>            
            </div>
            <div className={s.rightContainer}>            
                <div>
                    { shouldShowLoading 
                        ? 'Loading ...' 
                        : <UserCard user={owner} /> 
                    }
                </div>  
                <div className={s.chat} >
                   <button type="button" onClick={toggleModal}>
                       Chat with seller
                    </button>                    
                </div>
                <div className={s.favorive}>
                    <div className={s.iconShape}>
                        <Icon name="ShapeLight.svg" />
                    </div>                    
                    Add to favorive
                </div>                
            </div>
            <Modal onRequestClose={toggleModal} isOpen={isModalOpen} >
                <ContactSellerModal 
                    productId={product.id} 
                    onClose={toggleModal} 
                />
            </Modal>
        </div>
    );
}

Product.propTypes = {

};


export default Product;