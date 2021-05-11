import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, About, Contact } from "./pages";
import { Nav } from "./layout";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
