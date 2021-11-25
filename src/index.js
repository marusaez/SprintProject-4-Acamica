import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { AppProvider } from "./components/AppContext";
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ProtectedContext from "../src/components/Protected"
import Tweets from './components/Tweets.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ProtectedContext>
          {/* <Tweets/> */}
          {/* <App /> */}
        {/* <Register/> */}
          <Login/>
        </ProtectedContext>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


