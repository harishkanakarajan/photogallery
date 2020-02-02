import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

/* Importing neccesary components for Routing */
import Home from '../Components/Home'

import NotFound from '../Components/Common/404'
import ListPhoto from "../Components/PhotoList/ListPhoto";

export default class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* Available routes for the application */}
          <Route exact path="/" component={Home} />
          <Route path="/photos/:id" component={ListPhoto} />

          {/* Default Routing 404 handler if invalid URLs are given */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}
