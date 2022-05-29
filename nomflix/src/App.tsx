import React from 'react';

import Home from './Routes/Home';
import Search from './Routes/Search';
import Tv from './Routes/Tv';

import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/tv">
          <Tv />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path={['/', '/movied/:movieId']}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
