import React from 'react';
import T from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { Link, withRouter } from 'react-router-dom';
import s from './Login.module.scss';
import { routes } from '../router';
import Api from '../../api';

function Login({ handleLogin }){
    return(
        <div>
            <button type="button" onClick={handleLogin}>login</button>
            <Link to={routes.register}>
                Register
            </Link>
        </div>
    );
}

Login.propTypes = {

};

const enhancer = compose(
    withRouter,
    withHandlers({
        handleLogin: props => () => {
            Api.Auth.login();
            props.history.push(routes.home);
        }
    })
)
export default enhancer(Login);