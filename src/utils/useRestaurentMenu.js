import { useEffect, useState } from "react";

const useRestaurentMenu=(resId)=>{

    const [resInfo, setresInfo] = useState(null);
   
    useEffect(() => {
        fetchMenu();
      }, []);
      
      // Api calling
      
      const fetchMenu = async () => {
        const data = await fetch(
          "https:www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.79400&lng=77.86530&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setresInfo(json.data);
      };
      return resInfo;
};
export default useRestaurentMenu;