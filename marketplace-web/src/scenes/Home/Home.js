import React from 'react';
import T from 'prop-types';
import s from './Home.module.scss';
import { Header, SearchBar } from '../../components';


function Home(){
    return(
        <div className={s.container}>
            <Header>
                <SearchBar />
            </Header>
        </div>
    );
}

Home.propTypes = {

};

export default Home;