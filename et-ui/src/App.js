import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import HomePage from './components/homepage/homepage';
import AddReceipt from './components/addreceipt/addreceipt';


function App() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" component={() => <HomePage></HomePage>} exact></Route>
        <Route path="/addreceipt" component={() => <AddReceipt></AddReceipt>}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
