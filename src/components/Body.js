import RestCard, { withpromoted } from "./RestCard";
import { useEffect, useState, useContext } from "react";
// Now we don't need restList from mockdata as we are directly fetching from swiggy's api.
// import restList from "../utils/mock";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";

import useBody from "../utils/useBody";
// Body
const Body = () => {
  const [searchtext, setsearchtext] = useState("");

  // useBody is the custom hooks that contain all the commented code from line 15 to line 37
  const { listofrestaurent, setfilteredRestaurent, filteredRestaurent } =
    useBody();
  // Higher order component
  // const RestCardPromoted=withpromoted(RestCard);

  const onlinestatus = useOnlinestatus();
  const { loggedInUser, setuserName } = useContext(UserContext);
  // console.log(listofrestaurent);
  if (onlinestatus === false)
    return <h1>Looks Like You Are Offline, Check Your Internet Connection</h1>;

  return listofrestaurent == 0 ? (
    <Shimmer />
  ) : (
    <div className="body mb-10">
      <div className="flex m-6 justify-between ">
        <div className=" search-bar relative">
          {/* adding search icon made using chatgpt */}
          <div className="absolute inset-y-0 left-3 flex items-center">
            <svg
              className="w-5 h-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4a7 7 0 00-7 7 7 7 0 0011.31 5.3l4.39 4.39a1 1 0 001.41-1.42l-4.38-4.38A7 7 0 0011 4z"
              />
            </svg>
          </div>
          <input
            type="text"
            className=" border border-solid border-black px-8  rounded-lg "
            placeholder="Search Here"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            className="bg-green-100 px-3 mx-3 rounded-lg  hover:bg-green-200 text-lg"
            onClick={() => {
              const filteredRestaurent = listofrestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfilteredRestaurent(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="bg-green-100 px-4 mx-2  rounded-lg  hover:bg-green-200 text-lg"
          onClick={() => {
            let filteredlist = listofrestaurent.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilteredRestaurent(filteredlist);
          }}
        >
          Top Rated Restaurent Near You
        </button>
        {/* Input box to change the user name */}
        <div>
          <label className="font-normal text-xl">User Name: </label>
          <input
            value={loggedInUser}
            onChange={(e) => setuserName(e.target.value)}
            type="text"
            className="border border-black rounded-lg p-1"
          />
        </div>
      </div>

      <div className="restcontain flex flex-wrap">
        {filteredRestaurent?.map((info) => (
          <Link key={info.info.id} to={"/restaurent/" + info.info.id}>
            <RestCard resData={info} />
            {/* For higher order component */}
            {/* {info.info.isOpen?(<RestCardPromoted resData={info}/>):(<RestCard resData={info}/>)} */}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
