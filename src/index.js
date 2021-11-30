import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { AppProvider } from "./components/AppContext";
import ProtectedContext from "../src/components/Protected"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProtectedContext>
        <AppProvider>
          <App />
        </AppProvider>
      </ProtectedContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


