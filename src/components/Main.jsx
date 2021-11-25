import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Routes, Route } from "react-router-dom";
import Tweets from "./Tweets"
import Login from "./Login"
import Register from "./Register"
import Home from "./Home";

function Main() {
  
  return (
    <main className="App">
     <Routes>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Tweets" component={Tweets}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Register" component={Register}/>
    </Routes>
    </main>
  );
}

export default Main;
