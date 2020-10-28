import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Post from "./components/Post";
function App() {
  function markUp() {
    return (
      <Router>
        <Menu>
          <Menu.Item icon="home" as={Link} to="/" />
        </Menu>
        <Switch>
          <Route path={"/:slug"} component={Post} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
  return markUp();
}

export default App;
