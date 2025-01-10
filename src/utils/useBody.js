import { useEffect, useState } from "react";
const useBody = () => {
  // Way to declare Local state variable in react using hook

  const [listofrestaurent, setlistofrestaurent] = useState([]);
  const [filteredRestaurent, setfilteredRestaurent] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.18260&lng=78.02560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setlistofrestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return {
    listofrestaurent,
    filteredRestaurent,
    setfilteredRestaurent
  };
};
export default useBody;
