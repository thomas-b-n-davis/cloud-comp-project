import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/login/SignIn";
import SignUp from "./components/login/SignUp";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      
    <Router>
      <div id="wrap">
          <div id="content" style={{ paddingBottom: "100px" }}>
            <Switch>
              <Route exact path="/login" component={SignIn} />
              
              <Route path="/signup" component={SignUp} />
              
              </Switch>
          </div>
      </div>
    </Router>
   
  );
  }
}

export default App;