import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { AppProvider } from "./components/AppContext";
import ProtectedContext from "../src/components/Protected"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ProtectedContext>
          <App />
        </ProtectedContext>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


