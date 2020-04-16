import React from "react";

import "./App.css";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import AllCocktails from "./Components/AllCocktails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <SearchBar />
            <AllCocktails />
          </Route>
          <Route path="/home">
            <SearchBar />
            <AllCocktails />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
