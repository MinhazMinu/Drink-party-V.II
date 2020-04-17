import React, { useState, useEffect } from "react";
import SingleCocktails from "./SingleCocktails";

const AllCocktails = () => {
  const [allCocktails, setAllCocktails] = useState(null);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a")
      .then((res) => res.json())
      .then((data) => setAllCocktails(data.drinks));
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-between">
        {allCocktails &&
          allCocktails.map((cocktails) => (
            <SingleCocktails key={cocktails.idDrink} cocktails={cocktails} />
          ))}
      </div>
    </div>
  );
};

export default AllCocktails;
