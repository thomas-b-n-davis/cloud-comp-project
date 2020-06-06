
    // <div id="wrap">
    // <div id="content" style={{ paddingBottom: "100px" }}>
import React from 'react';
import './App.css';
import './css/home.css';
import Footer from './components/common/footer';
import Header from './components/common/header';
import Login from './components/login/login';
import Search from './components/search/Search';
import Profile from './components/profile/Profile';
import ProfileDetails from './components/profile/ProfileDetails';
import DogList from './components/search/DogList';
import SignUp from './components/login/SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route> 
            <Route exact path="/" component={DogList} />
            <Route exact path="/login" component={Login} /> 

            {/* MUha code <Route exact path="/login" component={SignIn} /> */}
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/detail" component={ProfileDetails} />
            <Route path="/signup" component={SignUp} />
          </Route>
        </Switch>
        <Footer/> 
      </div>
    </Router>
  );
}

export default App;