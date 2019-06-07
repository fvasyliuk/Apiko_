import React from 'react';
import T from 'prop-types';
import s from './Avatar.module.scss';


function Avatar({ src, size, name }) {
    
    return(   
        <>     
            {src 
                ? <img 
                    className={s.avatar}
                    src={src} 
                    alt="avatar" 
                    style={{height: `${size}px`, width: `${size}px`}}
                />
                : <div className={s.avatarText } style={{height: `${size}px`, width: `${size}px`}}>
                    {name}
                </div>
            }
        </>
    );
}

Avatar.propTypes = {

};

export default Avatar;