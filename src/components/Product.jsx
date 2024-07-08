import toast from "react-hot-toast";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {add,remove} from "../redux/Slices/CartSlice";


const Product = ({product}) => {

  const [selected,setSelected] = useState(false);
  const dispatch = useDispatch();

  function selecteHandler()
  {
    if(selected) 
    {
      setSelected(false);
      toast.error("Item removed from cart!");
      dispatch(remove(product.id));
    }
    else
    {
      setSelected(true);
      toast.success("Item added to cart!");
      dispatch(add(product));
    } 
   

  }
  
  return (
   <div className="flex flex-col items-center rounded-lg justify-between gap-y-4 p-6 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]
   hover:scale-110 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] transition duration-500">

      <div className=" flex flex-col items-center justify-center gap-y-3 ">
        <p className="font-bold text-slate-700">{product.title.substring(0,20)+"..."}</p>
        <p className=" text-center text-xs  text-slate-500">{product.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>

      <div className="h-[180px]">
        <img className="w-full h-full " alt="abc" src={product.image}></img>
      </div>

      <div className="w-full flex flex-row justify-between ">
        <p className="text-green-700 font-semibold">${product.price}</p>
        <div>
          <button
          className="border-2 border-slate-800 rounded-xl px-2 py-1 
          hover:bg-slate-900 hover:text-white transition-all duration-500"
          onClick={selecteHandler}>
            {
              selected ? <p className="text-xs uppercase">Remove item</p> : <p className="uppercase text-xs">Add to cart</p>
            }
          </button>

       
        </div>
            

      </div>

   </div>
  );
};

export default Product;
