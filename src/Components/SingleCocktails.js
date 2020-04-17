import React from "react";
import "./ComStyle.css";
import { Link } from "react-router-dom";

const SingleCocktails = ({ cocktails }) => {
  const {
    strDrinkThumb: img,
    idDrink: id,
    strAlcoholic: alcoholic,
    strInstructions: instruction,
    strIngredient1: ing1,
    strIngredient2: ing2,
    strIngredient3: ing3,
    strDrink: name,
    strCategory: category,
  } = cocktails;

  return (
    <div
      className="card my-3 shadow"
      style={{ width: "17rem", borderRadius: "7px" }}
    >
      <img
        src={img}
        alt="Card"
        style={{ width: "100%", hight: "80%", borderRadius: "7px" }}
        className="img img-fluid "
      />
      <div className="card-body">
        <h5 className="card-title border-bottom pb-2 ">Name : {name}</h5>
        <p className="card-text text-capitalize">
          <b>category</b> : {category} <br />
          <b>alcoholic</b> : {alcoholic}
          {/* <p className="">
            {" "}
            <b>Instruction</b> : {instruction}
          </p> */}
        </p>
      </div>
      <div className="card-footer">
        <Link to={`/cocktail/${id}`}>
          <button className="btn btn-sm btn-info">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCocktails;
