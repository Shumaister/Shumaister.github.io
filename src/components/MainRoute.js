import React from 'react'
import { Switch, Route } from "react-router-dom"
import Home from "../views/home/Home"
import About from "../views/about/About"
import Portfolio from "../views/portfolio/Portfolio"

function MainRoute() {
    return (
        <Switch>
            <Route
                exact
                path={'/'}
                component={Home}
            />
            <Route
                exact
                path={'/portfolio'}
                component={Portfolio}
            />
            <Route
                exact
                path={'/about'}
                component={About}
            />
        </Switch>
    )
}

export default MainRoute
