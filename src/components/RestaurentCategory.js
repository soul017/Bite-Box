import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data,showItems, setShowIndex,index }) => {
  
  const handleClick=()=>{
   setShowIndex((prevIndex)=>(prevIndex===index?null:index)); 
  }
  //   console.log(props);
  return (
    <div className="bg-slate-200 shadow-lg w-6/12 mx-auto my-3  p-4 rounded-sm">
    {/* Accordian head */}
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <div className="font-bold ">
          {data.title} ({data.itemCards.length})
        </div>
        <div>{"⬇️"}</div>
        {/* Accordian body */}
      </div>
      {showItems&&<ItemList items={data.itemCards} />}

    </div>
  );
};
export default RestaurentCategory;
