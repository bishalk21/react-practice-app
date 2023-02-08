import { useEffect, useState } from "react";
import { restrauList } from "../../constant";
import RestaurantCard from "../restaurant-card/RestaurantCard";
import SearchInputField from "../search-input/SearchInputField";
import ShimmerUi from "../shimmer-ui/ShimmerUi";

// props - properties
const BodyComponent = () => {
  // const [restaurants, setRestaurants] = useState(restrauList);
  const [restaurants, setNewRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // useEffect
  // empty dependency array - once after render
  // dependency array [restaurants] - once after initial render + every time after re-render
  useEffect(() => {
    // console.log("useEffect()");

    // api call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // optional chaining
    setNewRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // console.log("render");

  // not render component
  if (!restaurants) return null;

  // if (!filteredRestaurants === 0) return <h1>no matching restaurant</h1>;

  return restaurants?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <SearchInputField
        restaurants={restaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <div className="restro-card">
        {/* {RestaurantCard(restrauList[0])} - argument in function */}
        {/* <RestaurantCard {...restrauList[0].data} />
        <RestaurantCard {...restrauList[1].data} />
        <RestaurantCard {...restrauList[2].data} />
        <RestaurantCard {...restrauList[3].data} /> */}

        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
