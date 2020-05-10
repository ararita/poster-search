import React, { useState } from "react";
import Welcome from "./Welcome";
import PostersList from "./PostersList";
import PosterDetails from "./PosterDetails";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/posters-list" exact component={PostersList} />
          <Route
            path="/posters-list/:searchQuery"
            exact
            component={PostersList}
          />
          <Route
            path="/posters-list/:searchQuery/poster-details/:id"
            exact
            component={PosterDetails}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
