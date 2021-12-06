import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Acceuil from './pages/Accueil';
import PageError from './pages/PageError';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Acceuil} />
          <Route component={PageError} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
