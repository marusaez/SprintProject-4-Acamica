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
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Tweets" element={<Tweets/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Register" element={<Register/>}/>
    </Routes>
    </main>
  );
}

export default Main;
