import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// Header
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlinestatus = useOnlinestatus();
  const {loggedInUser}=useContext(UserContext);
  // subscribing to the store
const cartItems=useSelector((store)=>store.cart.items);
console.log(cartItems);
  return (
    <div className="flex bg-pink-100 justify-between h-20 shadow-md ">
      <div className="w-32 mt-2 ">
        <img alt="Image not found" src={LOGO_URL} />
      </div>
      <div className="flex p-6 mr-5  font-serif text-xl">
        <ul className="flex  mr-3 font-thin font-serif text-xl">
          <li className="mr-4">Online Status:{onlinestatus ? "✅" : "❌"}</li>
          <li className=" hover:bg-pink-50 rounded-xl px-2 ">
            <Link to="/">Home</Link>
          </li>
          <li className=" hover:bg-pink-50 rounded-xl px-2 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className=" hover:bg-pink-50 rounded-xl px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className=" hover:bg-pink-50 rounded-xl px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className=" hover:bg-pink-50 rounded-xl px-2 "><Link to="/cart">Cart-{"("+cartItems.length+")"} </Link></li>
        </ul>
        <Link to="/login">
          <button
            className="bg-pink-50 px-3 rounded-lg  hover:bg-pink-200"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </Link>
        <li className="font-bold list-none ml-4">{loggedInUser}</li>
      </div>
    </div>
  );
};
export default Header;
