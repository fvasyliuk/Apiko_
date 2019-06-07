import React from 'react';
import T from 'prop-types';
import { Switch, Route} from 'react-router-dom';
import s from './Home.module.scss';
import { Header, SearchBar } from '../../components';
import { routes } from '../router';
import LatestList from '../LatestList/LatestListContainer';
import Product from '../Product/ProductContainer';
import Users from '../Users/UsersContainer';


function Home(){
    return(
        <div className={s.container}>
            <Header>
                <SearchBar />
            </Header>

            <Switch>
                <Route path={routes.home}  component={LatestList} exact />
                <Route path={routes.product}  component={Product} />
                <Route path={routes.users}  component={Users} />
                <Route  render={()=><div>Not Found 404</div>} />
            </Switch>
        </div>
    );
}

Home.propTypes = {

};

export default Home;