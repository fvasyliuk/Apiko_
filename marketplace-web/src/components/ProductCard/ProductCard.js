import React from 'react';
import T from 'prop-types';
import s from './ProductCard.module.scss';




function ProductCard({ img, title, price, }) {
    console.log({ img, title, price, })

    return (
        <div className={s.container}>
            <div className={s.imageContainer}>
                <img src={img} />
            </div>
            <div className={s.titleContainer}>
                {title}
            </div>
            <div className={s.priceContainer}>
                $ {price}
            </div>
        </div>
    );
}

ProductCard.propTypes = {

};


export default ProductCard;