import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer.js";

const Body = () =>{
    //local state variable - super powerful variable
    const[updatebtn,setupdatebtn]=useState([]);
    const[filterbtn,setfilterbtn]=useState([]);
    const[searchtext,setsearchtext]=useState("");

     /* This can also be written as: -> Array destructring
   const arr = useState(resList);
   const [updatebtn,setupdatebtn] = arr;  */

/*    line 11 means i.e 
   const updatebtn = arr[0];
   const setupdatebtn = arr[1]; */ 

    // Normal JS variable
 /* let updatebtn = [{
   "info": {
      "id": "24342",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "hfyi3cfcxqzoncwjgetz",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.3,
      "sla": {
        "deliveryTime": 25,
      }
   }    
},
{
   "info": {
      "id": "24343",
      "name": "KFC",
      "cloudinaryImageId": "hfyi3cfcxqzoncwjgetz",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 3.8,
      "sla": {
        "deliveryTime": 25,
      }
   },
   
   "info": {
      "id": "24344",
      "name": "A2B",
      "cloudinaryImageId": "hfyi3cfcxqzoncwjgetz",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.7,
      "sla": {
        "deliveryTime": 25,
      }
   }    
}]; */

useEffect(()=>{
fetchingData();
},[]);

 // fetch will return a promise  resolve it using async await 

const fetchingData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9648016&lng=80.1533575&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json);
    setupdatebtn(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // optional chaining
    setfilterbtn(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

// conditional rendering
  return updatebtn.length===0?<Shimmer/>:(
    <div className="body">
        <div className="buttons">
         <div className="filter">
            <input type="text" value={searchtext} onChange={(e)=>setsearchtext(e.target.value)}></input>
            <button className="filter-logic" onClick={()=>{
            const update= updatebtn.filter((res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                setfilterbtn(update);
            }}>Search</button>
            </div>
            <div className="filter=res">
            <button className="filter-btn" onClick={()=>{
                const filterRestaurant = updatebtn.filter((res) => res.info.avgRating>4.5);
                setfilterbtn(filterRestaurant);
            }}>Top rated restaurants</button>
        </div> 
        </div>
      <div className="res-container">
      {filterbtn.map((res)=><RestaurantCard key={res.info.id} resData = {res}/>)}
     </div>
    </div>
  )
} 

export default Body;