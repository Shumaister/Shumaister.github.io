import React from 'react'

import { Switch, Route } from "react-router-dom"

 import Home from "../views/home/Home"
// import Users from "./Users";
// import About from "./About";

const About = () => (
    <div>
        <h1>Daniel Venegas</h1>
        <p>
            Sr. Front End Developer, adicto al anime, cine y series, jugador de
            fifa y amante del whisky
        </p>
    </div>
);

const Users = ({ match }) => (
    <div>
        <h1>Gabriel Maiori</h1>
        <p>
            Estoy aprendiendo de modo autodidactica react, para no quedarme atras con esta tecnologia y tener una pagina linda en la web
        </p>
    </div>
);


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
                path={'/users'}
                component={Users} 
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
