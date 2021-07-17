import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import PrismicProvider from './context/prismic.context';

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
