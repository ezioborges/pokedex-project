import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import PokemonDetails from "./Pages/PokemonDetails";
import PokemonLocation from "./Pages/PokemonLocation";
import Home from "./Pages/Home";

const Routes = () => {
   return(
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/home" component={ Home } />
      <Route exact path="/pokemon-details/:id" component={ PokemonDetails } />
      <Route exact path="/pokemon-maps/:id" component={ PokemonLocation } />
      <Route path="*" component={ NotFound } />
    </Switch>
   )
}

export default Routes;