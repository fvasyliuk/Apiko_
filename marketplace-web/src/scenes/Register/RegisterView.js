import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Register.module.scss';
import { routes } from '../router';
import { Input } from '../../components';

function Register({ fields, handleRegister, handleFieldChange, isLoading }){
    return(
        <>
            <div className={s.container} >
                <p className={s.title}>Register</p>
                <Input 
                    fields= {fields}
                    name="email" 
                    placeholder="example@gmail.com" 
                    label="EMAIL" 
                    onChange={handleFieldChange} 
                />
                <Input 
                    fields= {fields}
                    name="fullName" 
                    placeholder="Jon Snow" 
                    label="FULL NAME" 
                    onChange={handleFieldChange} 
                />
                <Input 
                    fields= {fields}
                    name="password" 
                    type="password"
                    label="PASSWORD" 
                    onChange={handleFieldChange} 
                />
                <Input 
                    fields= {fields}
                    name="passwordAgain" 
                    type="password"
                    label="PASSWORD AGAIN" 
                    onChange={handleFieldChange} 
                />
                <button className={s.buttonContinue} type="button" onClick={handleRegister}>
                    {isLoading ? 'Loading' : 'Continue' }                
                </button>            
            </div>
            <div className={s.footer}>
            I already have an account, 
                <Link to={routes.login}>
                    LOG IN
                </Link>
            </div>
        </>
    );
}

Register.propTypes = {

};


export default Register;