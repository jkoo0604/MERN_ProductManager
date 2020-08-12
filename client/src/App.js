import React from 'react';
import './App.css';
import { Router, Redirect } from '@reach/router';

import Main from './views/Main';
import OneProduct from './views/OneProduct';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="/products" noThrow/>
        <Main path="products/"/>
        <OneProduct path="products/:id"/>
        <Update path="products/:id/edit"/>
      </Router>    
    </div>
  );
}

export default App;
