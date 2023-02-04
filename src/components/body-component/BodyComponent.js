import { restrauList } from "../../constant";
import RestaurantCard from "../restaurant-card/RestaurantCard";

// props - properties
const BodyComponent = () => {
  return (
    <div className="restro-card">
      {/* {RestaurantCard(restrauList[0])} - argument in function */}
      {/* <RestaurantCard {...restrauList[0].data} />
        <RestaurantCard {...restrauList[1].data} />
        <RestaurantCard {...restrauList[2].data} />
        <RestaurantCard {...restrauList[3].data} /> */}

      {restrauList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} />;
      })}
    </div>
  );
};

export default BodyComponent;
