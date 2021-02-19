import React, { Component } from "react";
import Home from "./home";
import Despre from "./despre";
import Container from "react-bootstrap/Container";
import { Route } from "react-router-dom";

function App() {
  return (
      <Container>
          <h2>Demo rutare</h2>
        <Route exact path="/"> 
          <Home />
        </Route>
        <Route path="/despre">
          <Despre />
        </Route>
      </Container>
  );
}

export default App;
