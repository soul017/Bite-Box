import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../../Redux/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch=useDispatch();
const handleAddItem=(item)=>{
  // dispatching an action
dispatch(addItem(item));
}

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-3 mx-0 p-3 border-b-2 text-left border-gray-300 flex items-center justify-between"
        >
          {/* Text Content */}
          <div className="flex-1 pr-3">
            <div className="my-1 text-sm font-medium">
              <span>{item?.card?.info?.name}</span>
              <span className="block text-gray-500">
                ₹
                {item?.card?.info.price
                  ? item?.card?.info.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {item?.card?.info?.description}
            </p>
          </div>

          {/* Image with Add Button */}
          <div className="relative w-24 h-24 flex-shrink-0">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-full h-full rounded-md object-cover"
              alt={item?.card?.info?.name}
            />
            <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-md px-3 py-1 text-sm border border-gray-300 hover:bg-gray-100" onClick={()=>handleAddItem(item)}>
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
