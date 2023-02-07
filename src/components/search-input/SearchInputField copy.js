import React, { useState } from "react";

const SearchInputField = ({ restaurants, setNewRestaurants }) => {
  // const [restaurants, setRestaurants] = useState

  // const searchText = "KFC";

  // const searchVar = useState("");
  // const [searchText, setSearchText] = searchVar;

  const [searchText, setSearchText] = useState("");

  // const [textFalse, setTrue] = useState("false");
  console.log(restaurants);

  const handleOnChange = (e) => {
    const { value } = e.target.value;
    setSearchText(value);
  };

  function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
    );
    return filterData;
  }

  const handleOnClick = (e) => {
    e.preventDefault();

    // if (textFalse === "true") {
    //   setTrue("false");
    // } else {
    //   setTrue("true");
    // }

    // need to filter the data
    const data = filterData(searchText, restaurants);
    console.log(data);

    // update the state
    setNewRestaurants(data);
  };

  return (
    <>
      <div className="search-container p-3 d-flex align-items-center justify-content-center gap-3">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={handleOnChange}
        />
        {/* <h1>{textFalse}</h1>
        <button type="button" onClick={handleOnClick}>
          Set True
        </button> */}
        <button className="search-btn" onClick={handleOnClick}>
          Search
        </button>
      </div>
    </>
  );
};

export default SearchInputField;
