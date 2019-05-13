import React from 'react';
import T from 'prop-types';
import { Header, SearchBar } from '../../components';
import s from './Users.module.scss';


function Users() {
    return(
        <div className={s.container}>
            <Header>
                <SearchBar />
            </Header>
            Users
        </div>
    );
}

Users.propTypes = {

};

export default Users;