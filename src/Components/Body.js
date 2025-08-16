import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData.js"
import { useState } from "react"

const Body = () =>{
    //local state variable - super powerful variable
    const[updatebtn,setupdatebtn]=useState(resList);

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

  return(
    <div className="body">
         <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filterRestaurant = updatebtn.filter((res) => res.info.avgRating>4.5);
                setupdatebtn(filterRestaurant);
            }}>Top rated restaurants</button>
        </div> 
      <div className="res-container">
      {updatebtn.map((res)=><RestaurantCard key={res.info.id} resData = {res}/>)}
     </div>
    </div>
  )
} 

export default Body;