import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../Redux/cartSlice";

const Cart = () => {
    const dispatch=useDispatch();
    const handleClearItem=()=>{
dispatch(clearCart());
    }
  const cartitems = useSelector((store) => store.cart.items);
  return (
    <div>
      <div className="text-right">
        <button
          className="rounded-md px-2 py-1 text-xl font-medium border border-gray-500 bg-gray-400 hover:bg-gray-300 shadow-md m-6"
          onClick={handleClearItem}
        >
          Clear-Cart
        </button>
      </div>
      <h1 className="text-center -mt-16 p-2 font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto mb-3 border to-black rounded-lg p-5">
      {cartitems.length===0 && (<h1 className="text-center font-medium text-xl">Cart is empty. Add items to cart.</h1>)}
        <ItemList items={cartitems} />
      </div>
    
    </div>
  );
};
export default Cart;
