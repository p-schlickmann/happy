import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import Orphs from './pages/Orphs'
import Orphanage from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route exact path="/orphanages/create">
                    <CreateOrphanage />
                </Route>
                <Route exact path="/orphanages/:id">
                    <Orphanage />
                </Route>
                
                <Route exact path="/orphanages">
                    <Orphs />
                </Route>
                
                
            </Switch>      
        </BrowserRouter>
    )
}