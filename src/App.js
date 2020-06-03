import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';
import data from "./data.json"
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
function App() {
  function markUp() {
    return <Router>
      <Menu >
        <Menu.Item icon="home" as={Link} to="/" />
      </Menu>
      <Switch>
        <Route path={'/:slug'} render={(props) => <ProductDetails  {...props} />} />
        <Route path="/" render={(props) => <Home data={data}  {...props} />} />
      </Switch>
    </Router>
  }
  return (
    markUp()
  );
}

export default App;
