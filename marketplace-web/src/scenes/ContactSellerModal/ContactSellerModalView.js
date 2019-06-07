import React from 'react';
import T from 'prop-types';
import s from './ContactSellerModal.module.scss';

function ContactSellerModalView ({ 
    product, 
    owner, 
    text, 
    setText, 
    submit,
    disabled, 
}) {
    return (
        <div>
            Subject: {product.title} <br />
            {owner.fullName} 
            <textarea 
                value={text}
                onChange={(evt) => setText(evt.target.value)} 
            />

            <button disabled={disabled} onClick={submit} type="button">Send message</button>
        </div>
    );
};

ContactSellerModalView.propTypes = {

};

export default ContactSellerModalView;

