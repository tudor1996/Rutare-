import React from "react";
import Home from "./home";
import Despre from "./despre";
import NotFound from "./NotFound"
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { Route, NavLink, Switch } from "react-router-dom";


function App() {
  const activ = {fontWeight: "bold", color: "red"};

  return (
      <Container>
          <h2>Demo rutare</h2>
          <ListGroup>
    <ListGroup.Item>
      <NavLink exact to="/" activeStyle={activ}>Home</NavLink>
    </ListGroup.Item>
    <ListGroup.Item>
      <NavLink to="/despre" activeStyle={activ}>Despre</NavLink>
    </ListGroup.Item>
  </ListGroup>
  <Switch>
        <Route exact path="/"> 
          <Home />
        </Route>
        <Route path="/despre">
          <Despre />
        </Route>
        <Route>
          <NotFound />
        </Route>
        </Switch>
      </Container>
  );
}

export default App;
