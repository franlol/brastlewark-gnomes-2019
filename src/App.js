import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router';

import './App.css';

import Home from './pages/Home/Home';
import GnomeDetail from './pages/GnomeDetail/GnomeDetail';
import NoMatch from './pages/NoMatch/NoMatch';

export default () => {

  return (
    <Router>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gnome/:id" component={GnomeDetail} />
        <Route exact path="*" component={NoMatch} />
      </Switch>

    </Router>
  );
  
}
