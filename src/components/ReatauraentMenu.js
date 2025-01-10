import useRestaurentMenu from "../utils/useRestaurentMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";
// import { MENU_URL } from "../utils/constant";
const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);
  const [showIndex, setShowIndex]=useState(null)

  // Shimmer UI
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

  // filtering all the categories
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center m-4">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="font-medium text-xl my-2">
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      {/* categories Accordian */}
      {categories.map((category,index) => (
        <RestaurentCategory
          key={category?.card?.card.title}
          data={category?.card?.card}


          showItems={index===showIndex ? true:false}
           setShowIndex={(newIndex) =>
            setShowIndex(showIndex === newIndex ? null : newIndex)
          } // Toggle index or close if already open
          index={index}
        />
      ))}
    </div>
  );
};
export default RestaurentMenu;
