import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Routes, Route } from "react-router-dom";
import Tweets from "./Tweets"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home";

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
