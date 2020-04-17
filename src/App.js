import React, { createContext, useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import AllCocktails from "./Components/AllCocktails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import CocktailsDetails from "./Components/CocktailsDetails";

export const UserContext = createContext();

function App() {
  const [search, setSearch] = useState("a");
  return (
    <div>
      <Router>
        <UserContext.Provider value={[search, setSearch]}>
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
            <Route path="/cocktail/:id">
              <CocktailsDetails />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
