import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from  "../components/CartItem";


const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log(cart);

  const [totalAmount,setTotalAmount] = useState(0);



  useEffect(()=>{
    // total price calculate karna hai
    // use reduce function to accumulate amount
    // this curr is every item in the carts ,, to uski price plus kr li
      
      setTotalAmount(cart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0,
      ));

  },[cart])

  return (
    <div className="w-11/12 mx-auto">
      {
        cart.length > 0 ? 
        (<div className="flex flex-col lg:flex-row justify-center">
          
          <div className="flex flex-col">

            {
              cart.map((item) => (
                <CartItem item={item} key={item.id} />
                ))
            }
          </div>

          <div className="flex flex-col justify-between mt-10">
            <div className="flex flex-col ">
              <h2 className="font-bold text-green-700 uppercase text-xl">Your Cart</h2>
              <h1 className="uppercase text-4xl font-bold text-green-700">Summary</h1>
              <p className="mt-2 font-bold">Total items: {cart.length}</p>
            </div>
            <div className="flex flex-col font-bold">
              <p className="text-slate-700">Total Amount: ${(totalAmount).toFixed(2)}</p>
              <button  className="bg-green-700 w-full p-3 rounded-xl px-14 text-white font-semibold hover:bg-white hover:text-green-700 hover:border-2 border-green-600 transition duration-500">Checkout Now</button>
            </div>
          </div>
                      
        </div>
            
        )
        :
        (<div className="w-full h-screen flex flex-col justify-center items-center">
          <p className="text-slate-800 font-bold">Your cart is empty!</p>
          <NavLink to={"/"}>
             <button className="bg-green-600 p-3 rounded-xl px-10 text-white font-semibold hover:bg-white hover:text-slate-700 hover:border-2 border-green-600 transition duration-500">Shop Now</button>
          </NavLink>
          </div>)
      }

    </div>

  );
};

export default Cart;
