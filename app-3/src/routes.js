import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PokeList from './components/PokeList';
import PokeDetails from './components/PokeDetails'

export default (
    <Switch>
        <Route component={PokeList} exact path='/' />
        <Route component={PokeDetails} path='/pokemon/:name' />
    </Switch>
)