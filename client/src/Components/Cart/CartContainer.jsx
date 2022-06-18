import React,{useState} from 'react'
import { Link } from "react-router-dom";
import  {IoMdArrowDropdown,IoMdArrowDropup,IoMdArrowDropright} from "react-icons/io"
import {IoCloseSharp} from"react-icons/io5"

//component 
import FoodItem from './FoodItem';

const CartSM = ({toggle}) => {
   return (
       <>
       
       <div className="md:hidden flex items-center justify-between">
       <div className="flex flex-col items-start">
                        <small className="flex items-center gap-1" onClick={toggle}>
                            1 item <IoMdArrowDropup />
                        </small>
                        <h4> ₹300 <sub>(plus tax)</sub>
                        </h4>
               </div>
               <Link to={`/checkout/orders`} className="w-full">
                 <button className="flex items-center gap-1 bg-cuby-400 px-3 py-1 text-white rounded-lg">
                     Continue <IoMdArrowDropright />
                 </button>
                </Link>
       </div>
       </>
   )
};

const CartLg = ({toggle}) => {
    return (
        <>
        <div className="hidden md:flex items-center justify-between container px-32 mx-auto">
        <div className="flex gap-2 text-xl items-start">
                         <span className="border bg-white border-gray-300 p-1 rounded" onClick={toggle}>
                              <IoMdArrowDropup />
                         </span>
                         <h4> Your Order(1) 
                         </h4>
                </div>
                  <div className="flex items-center gap-2">
                  <h4 className="text-xl">
                   Subtotal ₹300 
                         </h4>
                <Link to={`/checkout/orders`} className="w-full">      
                  <button className="flex items-center text-lg h-10 font-light gap-1 bg-cuby-400 px-3 py-1 text-white rounded-lg">
                      Continue <IoMdArrowDropright />
                  </button>
                </Link>     
                  </div>
        </div>
        </>
    )
 } ;

const CartContainer = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () => setIsOpen(false);
    return (
        <>
            {isOpen && (
                <div className="fixed overflow-y-scroll w-full h-48 bg-white z-10 p-2 bottom-16 px-3">
                <div className="flex items-center justify-between">
                   <h3 className="text-xl font-semibold">Your Orders</h3>
                   <IoCloseSharp onClick={closeCart}/>
                  </div>
                  <hr className="my-2"/>
                   <div className="flex flex-col gap-2">
                         <FoodItem name="pizza" quantity="3" price="90"/>
                         <FoodItem name="pizza" quantity="3" price="90"/>
                         <FoodItem name="pizza" quantity="3" price="90"/>
                         <FoodItem name="pizza" quantity="3" price="90"/>
                   </div>
                </div>
            )}

            <div className="fixed w-full bg-white z-10 p-2 px-3 bottom-0">
               <CartSM toggle={toggleCart} />
               <CartLg toggle={toggleCart} />
            </div>
        </>
    )
}

export default CartContainer;