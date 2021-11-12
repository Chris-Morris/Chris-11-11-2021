import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/appNavbar';

// Import Views
import Home from './views/Home';
import Jeans from './views/Jeans';
import Tshirts from './views/Tshirts';
import Hats from './views/Hats';
import Jumpers from "./views/Jumpers";
import Coats from "./views/Coats";
import Shoes from "./views/Shoes";
import Socks from "./views/Socks";


class App extends Component {
  render() {
    return (
      <Router className="App">
        <AppNavbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/jeans'>
            <Jeans />
          </Route>
          <Route path='/tshirts'>
            <Tshirts />
          </Route>
          <Route path='/hats'>
            <Hats />
          </Route>
          <Route path='/jumpers'>
            <Jumpers />
          </Route>
          <Route path='/coats'>
            <Coats />
          </Route>
          <Route path='/shoes'>
            <Shoes />
          </Route>
          <Route path='/socks'>
            <Socks />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
