import React, { useState } from "react";




//components 
import DeliveryCarousal from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';


const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
          _id: "123456",
          photos: [
            "https://b.zmtcdn.com/data/pictures/5/19096095/bedddb08e3eafa541fdec9db26613993_o2_featured_v2.jpg",
          ],
          name: "Domino's Pizza",
          cuisine: ["Pizza", "Fast Food"],
          averageCost: 150,
          isPro: true,
          isOff: 80,
          durationOfdelivery: 47,
          restaurantReviewValue: 4.1,
        }
        
      ]);


    return (
        <>
            <DeliveryCarousal />
            {/* <Brand/> */}
            <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
                Delivery Restaurants in Nagpur Road
            </h1>
            <div className="flex justify-between flex-wrap ">
            {
               restaurantList.map((restaurant) => (
                <RestaurantCard {...restaurant} key={restaurant._id} />
               )) 
            }
           
            </div>
        </>
    )
};

export default Delivery;
