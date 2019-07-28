import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Save from "./pages/Save";
import Search from "./pages/Search";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route  path="/save" component={Save} />     
        </Switch>
      </div>
  </Router>
  );
}

export default App;
