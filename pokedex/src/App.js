import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Main from "./Pages/Main";
import NotFound from "./Pages/NotFound";
import PokemonDetails from "./Pages/PokemonDetails";
import PokemonLocation from "./Pages/PokemonLocation";

const Routes = () => {
   return(
    <Switch>
      <Route exact path="/" component = { Main } />
      <Route exact path="/pokemon-details/:id" component={ PokemonDetails } />
      <Route exact path="/pokemon-maps/:id" component={ PokemonLocation } />
      <Route path="*" component={ NotFound } />
    </Switch>
   )
}

export default Routes;