import React, { useState, useEffect, useContext } from "react";
import SingleCocktails from "./SingleCocktails";
import { UserContext } from "../App";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const AllCocktails = () => {
  const [allCocktails, setAllCocktails] = useState(null);
  const [search, setSearch] = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      )
        .then((res) => res.json())
        .then((data) => {
          setAllCocktails(data.drinks);
          setLoading(false);
        });
    } catch (error) {
      console.log("aaaa");
    }
  }, [search]);

  return (
    <div className="container">
      <div className="row justify-content-center mx-auto">
        {loading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={180}
            width={180}
            visible={true}
            timeout={6000}
          />
        )}
        {!allCocktails && !loading && <h3>No match</h3>}
      </div>
      <div className="row justify-content-between">
        {
          allCocktails &&
            allCocktails.map((cocktails) => (
              <SingleCocktails key={cocktails.idDrink} cocktails={cocktails} />
            ))
          // : (
          //   <div className="row justify-content-center mx-auto">
          //     <Loader
          //       type="Puff"
          //       color="#00BFFF"
          //       height={180}
          //       width={180}
          //       visible={show}
          //     />
          //   </div>
          // )
        }
      </div>
    </div>
  );
};

export default AllCocktails;
