import { IMG_CON_URL } from "../../constant";

const burgerKing = {
  name: "Burger King",
  image: IMG_CON_URL,
  cuisines: ["Burgers", "American"],
  rating: "4.3.",
};

// const RestaurantCard = (props) => { we destructure data from props
// const RestaurantCard = ({ restaurant }) => {
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  //   const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.data;

  return (
    <div className="card">
      <img src={IMG_CON_URL + cloudinaryImageId} alt="" />
      {/* <h2>{props.restaurant.data?.name}</h2> */}
      <h2>{name}</h2>
      {/* <h3>Burgers, American</h3> */}
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export default RestaurantCard;
