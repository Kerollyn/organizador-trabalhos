import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/Login';
import Home from '../pages/Home';
import Cadastro from '../pages/Register';

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/register' component={Cadastro}/>
            <Route path='/home' component={Home} />
        </Switch>
    )
}
