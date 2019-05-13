import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../components';
import { Home, NotFound, Auth, Terms, Inbox, Privacy, Bookmarks, Profile, Search, Listings, Users } from './';



export const routes = {
    home: '/',
    login: '/auth/login',
    register: '/auth/register',
    auth: '/auth',
    inbox: '/inbox',
    terms: '/terms',
    privacy: '/privacy',
    bookmarks: '/bookmarks',
    profile: '/profile',
    users: '/users/:id',
    listings: '/listings/:id',
    search: '/search',
};


export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.home} component={Home} />        
                <PrivateRoute exact path={routes.inbox} component={Inbox} />        
                <PrivateRoute isLoggedOut path={routes.auth} component={Auth} />
                <PrivateRoute exact path={routes.privacy} component={Privacy} />
                <PrivateRoute exact path={routes.profile} component={Profile} />
                <Route exact path={routes.terms} component={Terms} />
                <Route exact path={routes.search} component={Search} />  
                <Route exact path={routes.users} component={Users} /> 
                <Route exact path={routes.listings} component={Listings} /> 
                <Route exact path={routes.bookmarks} component={Bookmarks} />                 
                <Route  component={NotFound} />
            </Switch>            
        </BrowserRouter>
    )
}