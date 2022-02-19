import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './theme/reset.css';
import { UserContextProvider } from './context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
