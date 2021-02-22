import React from 'react'
import { Container } from '@material-ui/core';
import { Route, Router, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Auth from './components/auth/Auth';

const App = () => {

    return (
        <Container maxWidth="lg">
            <Navbar />
            <Switch>
                <Route path="/auth">
                    <Auth />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Container>
    )
}

export default App
