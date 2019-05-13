import React from 'react';
import T from 'prop-types';
import s from './Shape.module.scss';

function Shape({light, ...props}){
    const src = !light                     
                    ?"http://localhost:3000/svg/Shape.svg"
                    :"http://localhost:3000/svg/ShapeLight.svg" ;
    return(
        <div className={s.container}>
            <img className={s.shape} src={src} alt="Shape" />
        </div>
    );
}

Shape.propTypes = {

};

export default Shape;