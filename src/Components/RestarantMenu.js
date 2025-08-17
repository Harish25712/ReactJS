import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";

const RestarantMenu = () => {
  const[resMenu,setresMenu] = useState(null);
  const {resId}=useParams();
  //console.log(resId);
  useEffect(()=>{
    fetchingResMenu()
  },[])

  const fetchingResMenu = async () =>{
    const data = await fetch(MENU_URL+resId);
    const json = await data.json();
    //console.log(json);
    setresMenu(json.data);
  }

  if(resMenu===null) return <Shimmer/>

      const{name,cuisines,costForTwo,avgRating} = resMenu?.cards[2]?.card?.card?.info;
      const{deliveryTime} = resMenu?.cards[2]?.card?.card?.info?.sla;
      const {itemCards} = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


  return(
    <div>
           <h1>{name}</h1> 
           <p>{cuisines.join(",")}</p>  
           <p>{avgRating} stars</p>
           <p>{deliveryTime} mins</p>
           <h2>Menu:</h2> 
        <ul>
            {itemCards.map((item)=>(
              <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - Rs.{item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}
              </li>
            )
            )}
        </ul>
    </div>
  )
}

export default RestarantMenu;