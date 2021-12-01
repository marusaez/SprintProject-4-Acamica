import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { AppProvider } from "./context/AppContext";
import ProtectedContext from "./context/Protected"


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


