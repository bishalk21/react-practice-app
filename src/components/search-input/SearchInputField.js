import React, { useState } from "react";

const SearchInputField = ({ restaurants, setFilteredRestaurants }) => {
  // const [restaurants, setRestaurants] = useState

  // const searchText = "KFC";

  // const searchVar = useState("");
  // const [searchText, setSearchText] = searchVar;

  const [searchText, setSearchText] = useState("");

  // const [textFalse, setTrue] = useState("false");

  // dependency array [searchText] - once after initial render + every time after re-render (my searchText changes)

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
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
    setFilteredRestaurants(data);
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
