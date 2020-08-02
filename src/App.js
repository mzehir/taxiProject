import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation";
import Maps from "./components/maps";

const App = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-2 pl-0 bg-light">
            <Navigation></Navigation>
          </div>
          <Router>
            <Switch>
              <Route exact path="/">
                <div className="col-sm-12 col-md-10 bg-light">
                  <div className="row">
                    <Maps></Maps>
                  </div>
                </div>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}
export default App;