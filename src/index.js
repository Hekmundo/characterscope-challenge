import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PrismicProvider from './context/prismic.context';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PrismicProvider>
        <App />
      </PrismicProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
