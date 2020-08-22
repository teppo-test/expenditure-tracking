import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import HomePage from './components/homepage/homepage';


function App() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" component={() => <HomePage></HomePage>}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
