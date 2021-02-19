import React from "react";
import Home from "./home";
import Despre from "./despre";
import NotFound from "./NotFound"
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Evenimente from "./evenimente";
import { Route, NavLink, Switch,Link } from "react-router-dom";


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
      <NavLink exact to="/evenimente" activeStyle={activ} >Evenimente</NavLink>
      <ul>
        <li>
          <Link to="/evenimente/1"> <b>UNTOLD 2021</b> </Link>
        </li>
        <li>
          <Link to="/evenimente/2"> <b>NEVERSEA</b> </Link>
        </li>
        <li>
          <Link to="/evenimente/3"> <b>Zilele Orasului</b> </Link>
        </li>
      </ul>
    </ListGroup.Item>
    <ListGroup.Item>
      <NavLink to="/despre" activeStyle={activ}>Despre</NavLink>
    </ListGroup.Item>
  </ListGroup>
  <Switch>
        <Route exact path="/"> 
          <Home />
        </Route>
        <Route exact path={["/evenimente", "/evenimente/:idActivitate"]} component={Evenimente} />
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
