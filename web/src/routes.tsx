import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './pages/Home'
import Orphs from './pages/Orphs'

export default () => {
    return (
        <BrowserRouter>
            <Route exact path="/" >
                <Home />
            </Route>
            <Route path="/orphanages">
                <Orphs />
            </Route>
        </BrowserRouter>
    )
}