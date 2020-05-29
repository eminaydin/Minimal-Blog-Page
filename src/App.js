import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';
import data from "./data.json"
function App() {
  return (
    <Router>

      <Switch>
        <Route path={'/:slug'} render={(props) => <ProductDetails data={data} {...props} />} />
        <Route path="/" render={(props) => <Home data={data}  {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
