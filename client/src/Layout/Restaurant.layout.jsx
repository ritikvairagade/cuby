import React from 'react'
import {TiStarOutline} from "react-icons/ti";
import { Link } from "react-router-dom";
import {RiDirectionLine , RiShareForwardLine} from "react-icons/ri";
import {BiBookmarkPlus} from "react-icons/bi";


//component
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/imageGrid';
import InfoButtons from '../Components/restaurant/InfoButtons';
import RestaurantInfo from '../Components/restaurant/RestaurantInfo';
import TabContainer from '../Components/restaurant/Tabs';
import CartContainer from '../Components/Cart/CartContainer';





const RestaurantLayout = (props) => {
    return (
       <>
         <RestaurantNavbar />
        <div className="container mx-auto px-4 lg:px-40">
           <ImageGrid images={["https://b.zmtcdn.com/data/pictures/0/3300300/bedddb08e3eafa541fdec9db26613993.jpg",
           "https://b.zmtcdn.com/data/pictures/5/19096095/82362ffb4f47cbbfb49abf4fc956005a.jpg",
           "https://b.zmtcdn.com/data/dish_photos/410/06c9dcc4f29d4c1ef77171844560a410.jpg",
           "https://b.zmtcdn.com/data/pictures/5/19096095/bb50e53d14ecfc9d3f5c96e18d0578fd.jpg?fit=around|300:273&crop=300:273;",
           "https://b.zmtcdn.com/data/pictures/0/3300300/bedddb08e3eafa541fdec9db26613993.jpg",
           
           ]} /> 
   
         <RestaurantInfo name="Domino's Pizza" restaurantRating="3.5" deliveryRating="3.2" cuisine="Pizza, Fast Food, Beverages" address="Nagpur Rd, Civil Lines, Chandrapur" />
      
      <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive >
              <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons >
              <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons >
              <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons >
              <RiShareForwardLine /> Share
          </InfoButtons>
      </div>

      <div className="my-10">
      <TabContainer>
          
     </TabContainer>
      </div>
     <div className="relative">
     {props.children}
     </div>
     
        </div>
        <CartContainer />
       
       </>
    )
}

export default RestaurantLayout;
