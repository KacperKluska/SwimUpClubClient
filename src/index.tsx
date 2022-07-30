import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './theme/reset.css';
import { UserContextProvider } from './context/UserContext';
import { SnackBarContextProvider } from './context/SnackBarContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <SnackBarContextProvider>
          <App />
        </SnackBarContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
