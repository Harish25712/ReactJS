        import React from "react"
        import ReactDOM from "react-dom/client"
       
       /* Header 
     -- logo
     -- nav items

   Body
      -- search
      -- RestaurantContainer
          -- RestaurantCard
                  -- name of restaurant,cuisine,delivery time,rating

   Footer
      -- copyright
      -- links
      -- Address
      -- contact
   */

      const Header = () => {
        return(
                <div className="head">
                <div className="logo-container">
                        <img className="logo" src="https://i.pinimg.com/originals/5b/cd/0e/5bcd0e249465af3e8d38b2fefe487946.jpg"></img>
                </div>
                <div className="nav-items">
                        <ul>
                             <li>Home</li>
                             <li>About us</li>
                             <li>Contact us</li>
                             <li>Cart</li>
                        </ul>
                </div>
                </div>
        )
      }

         const RestaurantCard = ({resData}) => {
                // const {resName,cuisine,rating,deliveryTime} = props; destructring on the fly
                const {name,cuisines,avgRating,costForTwo} = resData?.info;
                const{slaString} = resData?.info.sla;
        return(
                <div className="res-card">
                        <img className="img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}></img>
                        <h3>{name}</h3>
                        <h4>{cuisines.join(",")}</h4>
                        <h4>{avgRating}</h4>
                        <h4>{costForTwo}</h4>
                        <h4>{slaString}</h4> 
                </div>
        )
      }

       const resList = [
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "610795",
"name": "Big Bowl",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_610795.JPG",
"locality": "Chrompet",
"areaName": "Chromepet",
"costForTwo": "₹250 for two",
"cuisines": [
"North Indian",
"Chinese",
"Tibetan",
"Desserts"
],
"avgRating": 4.2,
"parentId": "434792",
"avgRatingString": "4.2",
"totalRatingsString": "1.6K+",
"promoted": true,
"adTrackingId": "cid=31276391~p=0~adgrpid=31276391#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=610795~plpr=COLLECTION~eid=22217894-b647-408a-9a7c-697e2b0ef865~srvts=1753116933051~collid=83645",
"sla": {
"deliveryTime": 26,
"lastMileTravel": 3.9,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "3.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-22 02:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹129",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "31276391"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=610795&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "714094",
"name": "Nandhana Palace",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/6a750869-ee41-4272-9ecc-827d20f7ed48_714094.jpg",
"locality": "Chromepet",
"areaName": "Chrompet",
"costForTwo": "₹500 for two",
"cuisines": [
"Biryani",
"Andhra",
"South Indian"
],
"avgRating": 4.3,
"parentId": "2120",
"avgRatingString": "4.3",
"totalRatingsString": "11K+",
"promoted": true,
"adTrackingId": "cid=31150443~p=9~adgrpid=31150443#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=714094~plpr=COLLECTION~eid=867e6d0b-c149-4036-ac8a-abe4c0664231~srvts=1753116933051~collid=83645",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 4.5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "4.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-22 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
}
]
},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.5",
"ratingCount": "3.3K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "31150443"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=714094&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "126915",
"name": "Zaitoon",
"cloudinaryImageId": "3dd95cf5d718da0f33ca7c161d3b1318",
"locality": "Selaiyur",
"areaName": "Selaiyur",
"costForTwo": "₹450 for two",
"cuisines": [
"Arabian",
"Biryani",
"Chinese",
"Indian",
"Kebabs",
"Mughlai",
"Juices"
],
"avgRating": 4.4,
"parentId": "4555",
"avgRatingString": "4.4",
"totalRatingsString": "71K+",
"promoted": true,
"adTrackingId": "cid=31011101~p=12~adgrpid=31011101#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=126915~plpr=COLLECTION~eid=f3a25dd9-3ff6-4c3d-a233-48b3e85afba7~srvts=1753116933051~collid=83645",
"sla": {
"deliveryTime": 48,
"lastMileTravel": 8,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "8.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-22 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
"description": "OnlyOnSwiggy"
}
]
},
"select": true,
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "OnlyOnSwiggy",
"imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
}
}
]
},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹179",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.7",
"ratingCount": "10K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "31011101"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=126915&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
{
"info": {
"id": "331405",
"name": "Sangeetha Veg Restaurant",
"cloudinaryImageId": "byyvwwxwtzymkhzoobzr",
"locality": "Medavakkam",
"areaName": "Kovilambakkam",
"costForTwo": "₹350 for two",
"cuisines": [
"South Indian",
"Chinese"
],
"avgRating": 4.7,
"veg": true,
"parentId": "1260",
"avgRatingString": "4.7",
"totalRatingsString": "43K+",
"promoted": true,
"adTrackingId": "cid=30488744~p=13~adgrpid=30488744#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=331405~plpr=COLLECTION~eid=3013e1ab-4c52-484f-93fc-5b377da3e636~srvts=1753116933051~collid=83645",
"sla": {
"deliveryTime": 27,
"lastMileTravel": 5.9,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "5.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-21 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "30488744"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=331405&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
{
     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "752980",
"name": "EatFit",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/86abb8c6-4fbf-4b5f-9247-b05c86a70591_752980.jpg",
"locality": "Chromepet",
"areaName": "Postal Colony",
"costForTwo": "₹270 for two",
"cuisines": [
"Chinese",
"Healthy Food",
"Tandoor",
"Pizzas",
"Thalis",
"Biryani"
],
"avgRating": 4.4,
"parentId": "76139",
"avgRatingString": "4.4",
"totalRatingsString": "1.8K+",
"promoted": true,
"adTrackingId": "cid=31276047~p=14~adgrpid=31276047#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=752980~plpr=COLLECTION~eid=8bc80bbf-298e-4b52-98f8-72a07b71e9ba~srvts=1753116933051~collid=83645",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-22 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Healthy.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Healthy.png",
"description": "Delivery!"
}
}
]
},
"textExtendedBadges": {},
"textBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "31276047"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=752980&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"   
},
{
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "648407",
"name": "Sharief Bhai Biryani",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/ec00c0a8-875b-4d84-a86d-3d7df3d52e0a_648407.jpg",
"locality": "Kolappakkam",
"areaName": "Porur",
"costForTwo": "₹400 for two",
"cuisines": [
"Biryani",
"Kebabs",
"Mughlai",
"Arabian",
"rolls",
"Street Food",
"Tea",
"Desserts",
"Beverages"
],
"avgRating": 3.9,
"parentId": "469102",
"avgRatingString": "3.9",
"totalRatingsString": "5.7K+",
"promoted": true,
"adTrackingId": "cid=31276172~p=15~adgrpid=31276172#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=648407~plpr=COLLECTION~eid=8ca42559-7fb9-473e-9c85-06be355cff34~srvts=1753116933051~collid=83645",
"sla": {
"deliveryTime": 40,
"lastMileTravel": 8.7,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "8.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-21 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.5",
"ratingCount": "405"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "31276172"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=648407&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
}];
      const Body = () => {
        return(
                <div className="body">
                      <div className="search">Search</div>
                      <div className="res-container">
                        {
                                resList.map(
                                        (restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                                )
                        }
                </div>
                </div>
        )
      }


      const Footer = () => {
        return(
                <div className="foot">
                        
                </div>
        )
      }

      const AppLayout = () => {
        return(
                <div className="app">
                <Header/>
                <Body/>
                </div>
        )
      }
       const root = ReactDOM.createRoot(document.getElementById("root"));
       root.render(<AppLayout/>);