import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Contact from '../pages/Contacts';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route path='/profile' component={Profile} isPrivate />
            <Route path='/contacts' component={Contact} isPrivate />
            <Route path='/edit/:id' component={Dashboard} isPrivate></Route>

            <Route path="/" component={() => <h1>404</h1>} />
        </Switch>
    )
}