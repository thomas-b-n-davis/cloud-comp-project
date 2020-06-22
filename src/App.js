
    // <div id="wrap">
    // <div id="content" style={{ paddingBottom: "100px" }}>
import React from 'react';
import './App.css';
import './css/home.css';
import Footer from './components/common/footer';
import Header from './components/common/header';
import Search from './components/search/Search';
import Profile from './components/profile/Profile';
import ProfileDetails from './components/profile/ProfileDetails';
import DogList from './components/search/DogList';
import SignUp from './components/login/SignUp';
import About from './components/About';
import Policy from './components/Policy';
import Chats from './components/chats/Chats';
import SignIn from './components/login/SignIn';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/login/login';

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
            <Route exact path="/about" component={About} />
            <Route exact path="/privacyPolicy" component={Policy} />
            <Route exact path="/detail" component={ProfileDetails} />
            <Route path="/signup" component={SignUp} />
            <Route path="/chats" component={Chats} />
          </Route>
        </Switch>
        <Footer/> 
      </div>
    </Router>
  );
}

export default App;