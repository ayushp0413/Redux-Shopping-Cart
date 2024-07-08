import { PiShoppingCartFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  
  const {cart} = useSelector((state)=>state); 


  return (
    <div className="relative bg-slate-900 w-full">
      

      <div className="w-9/12 flex flex-row justify-between mx-auto  items-center py-3">
         <NavLink to="/">
            <img className="rounded-full" alt="abc" src="https://codehelp-shopping-cart.netlify.app/logo.png" width={150}/>
          </NavLink>

          <div className="text-white flex flex-row justify-center items-center gap-x-6">
            <NavLink to="/"><p>Home</p></NavLink>
           <div className="">
            <NavLink to="/cart">
            <PiShoppingCartFill fontSize={25}/></NavLink>
            <div className="absolute text-white right-[190px] bg-green-700 animate-bounce rounded-full px-1 top-5 text-xs">
            {  
              cart.length > 0 ? <p>{cart.length}</p> : <p></p>
            }  
      </div>

           </div>
          </div>
      </div>
    </div>
  )
};

export default Navbar;
