import React from "react";

const SingleCocktails = ({ cocktails }) => {
  console.log(cocktails);
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
  console.log(img);

  return (
    <div
      className="card my-3 shadow"
      style={{ width: "17rem", borderRadius: "7px" }}
    >
      <img
        src={img}
        alt="Card"
        style={{ width: "100%", hight: "80%", borderRadius: "7px" }}
      />
      <div className="card-body">
        <h5 className="card-title border-bottom pb-2 ">Name : {name}</h5>
        <p className="card-text ">
          <p className="text-capitalize">
            <b>category</b> : {category}
          </p>
          <p className="text-capitalize">
            <b>alcoholic</b> : {alcoholic}
          </p>
          {/* <p className="">
            {" "}
            <b>Instruction</b> : {instruction}
          </p> */}
        </p>
      </div>
      <div className="card-footer">Details</div>
    </div>
  );
};

export default SingleCocktails;
