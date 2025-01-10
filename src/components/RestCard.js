import { CDN_URL } from "../utils/constant";
// Rest-Card
const RestCard = (props) => {
  const { resData } = props;
  //   destructuring the code
  const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } =
   resData.info;
  const { slaString } = resData.info.sla;
// console.log(CDN_URL);
  return (
    <div className="restcard m-4 ml-12 p-4 w-[230px] h-[420px] bg-slate-100 rounded-2xl  hover:bg-slate-200"  >
      <div className="restcardinfo ">
        <img
          className="restcard-img rounded-xl h-48 w-64"
          alt="Img not found"
          src={CDN_URL + cloudinaryImageId}
        ></img>
        <h3 className="m-2 text-center font-medium ">{name}</h3>
        <h4 className="text-left " >{cuisines.join(", ")}</h4>
        <h4 className="text-left mt-1">Rating: {avgRatingString}</h4>
        <h4 className="text-left ">{slaString}</h4>
        <h4 className="text-left ">{costForTwo}</h4>
      </div>
    </div>
  );
};
// Higher order component
export const withpromoted=(RestCard)=>{
  return (props)=>{
    return(
      <div>
<label className="absolute bg-black text-white m-2 ml-10 p-2 rounded-lg">Opened</label>
<RestCard {...props}/>
      </div>
      
    );
  };
};
export default RestCard;
