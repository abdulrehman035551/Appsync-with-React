import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import client from "./Apollo/client.js";
import { ApolloProvider } from '@apollo/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    
      <App />
    </ApolloProvider>

   
);


reportWebVitals();

