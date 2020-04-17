import React, { useContext } from "react";
import { UserContext } from "../App";
import "./Search.css";
const SearchBar = () => {
  const [search, setSearch] = useContext(UserContext);
  let src = "a";

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="my-5">
      <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2 ">
        <input
          className="form-control form-control-sm ml-3 w-75 "
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={handleInput}
        />
      </form>
    </div>
  );
};

export default SearchBar;
