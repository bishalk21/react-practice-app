import { useState } from "react";
import { restrauList } from "../../constant";
import RestaurantCard from "../restaurant-card/RestaurantCard";
import SearchInputField from "../search-input/SearchInputField";

// props - properties
const BodyComponent = () => {
  const [restaurants, setRestaurants] = useState(restrauList);
  const [newRestaurants, setNewRestaurants] = useState([]);
  console.log(newRestaurants);

  return (
    <>
      <SearchInputField
        restaurants={restaurants}
        setNewRestaurants={setNewRestaurants}
      />
      <div className="restro-card">
        {/* {RestaurantCard(restrauList[0])} - argument in function */}
        {/* <RestaurantCard {...restrauList[0].data} />
        <RestaurantCard {...restrauList[1].data} />
        <RestaurantCard {...restrauList[2].data} />
        <RestaurantCard {...restrauList[3].data} /> */}

        {newRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
