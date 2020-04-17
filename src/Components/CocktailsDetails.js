import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const CocktailsDetails = () => {
  const { id } = useParams();

  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    async function cocktailProperty() {
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();

        if (data.drinks) {
          setCocktail(data.drinks[0]);
          setLoading(false);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
    }
    cocktailProperty();
  }, [id]);
  if (cocktail) {
    const {
      strDrinkThumb: img,
      idDrink: iid,
      strAlcoholic: alcoholic,
      strInstructions: instruction,
      strIngredient1: ing1,
      strIngredient2: ing2,
      strIngredient3: ing3,
      strDrink: name,
      strCategory: category,
    } = cocktail;
    return (
      <div>
        <div className="container m-5 py-5">
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
            {!cocktail && !loading && <h3>No match</h3>}
          </div>
          <div className="row">
            <div className="col-md-7">
              <img
                src={img}
                alt="pic"
                className="shadow img-fluid"
                style={{ width: "80%", borderRadius: "7px" }}
              />
            </div>
            <div className="col-md-5 text-lead d-flex align-items-center border border-green">
              <div>
                <p className="h3 border-bottom">Details:</p>
                <h6>{name}</h6>
                <p> Alcoholic : {alcoholic}</p>
                <p>Category : {category}</p>
                <p>Instruction : {instruction}</p>
                <p>
                  Ingredients : {ing1}, {ing2},{ing3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <> </>;
  }
};

export default CocktailsDetails;
