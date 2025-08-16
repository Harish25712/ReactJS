import { LOGO_URL } from "../utils/constants";

const RestaurantCard = ({resData}) =>{
  const{name,cuisines,avgRating,cloudinaryImageId}=resData?.info;
    const{deliveryTime}=resData?.info?.sla;
  return(
    <div className="res-card">
      <img className="res-img" src={LOGO_URL+cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h3>{avgRating} stars</h3>
      <h4>{deliveryTime} mins</h4> 
      </div>
  )
} 

export default RestaurantCard;