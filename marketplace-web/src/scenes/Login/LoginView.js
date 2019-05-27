import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Login.module.scss';
import { routes } from '../router';
import { Input } from '../../components';


function Login({ fields, handleLogin, handleFieldChange, isLoading }){
    return(
        <>
            <div className={s.container} >
                <p className={s.title}>Login</p>
                <Input 
                    fields= {fields}
                    name="email" 
                    placeholder="example@gmail.com" 
                    label="EMAIL" 
                    onChange={handleFieldChange} 
                />
                <Input 
                    fields= {fields}
                    name="password" 
                    type="password"
                    label="PASSWORD" 
                    onChange={handleFieldChange} 
                />
                <div className={s.remamberLink}>
                    <Link to={routes.register}>
                        Don’t remember password?
                    </Link>
                </div>
                <button className={s.buttonContinue} type="button" onClick={handleLogin}>
                    {isLoading ? 'Loading' : 'Continue' }                
                </button>            
            </div>
            <div className={s.footer}>
                I have no account, 
                <Link to={routes.register}>
                    REGISTER NOW
                </Link>
            </div>
        </>
    );
}

Login.propTypes = {

};


export default Login;