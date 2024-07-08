import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice";


const CartItem = ({item}) => {

  const dispatch = useDispatch();


  function removeFromCart()
  {
    dispatch(remove(item.id));
    toast.error("Item Removed!");
    
  }

  return(
    <div className="w-11/12 mx-auto border-b-2">

      <div className="flex flex-row justify-center mt-3  p-10 gap-10">
        
        <div className="max-h-[180px] max-w-[150px]">
          <img className="w-full h-full opacity-0 sm:opacity-100" src={item.image} alt="img"/>
        </div>

        <div className="flex flex-col justify-center gap-y-6 max-w-xl">
          <h1 className="font-bold text-lg text-slate-800">{item.title}</h1>
          <p className="text-slate-500 ">{item.description.substring(0,120)+"..."}</p>
          <div className="flex flrx-row justify-between">
            <p className="text-green-600 font-bold">${item.price}</p>
            <div
            className="bg-pink-600 p-3 rounded-full flex justify-center items-center text-white"
            onClick={removeFromCart}> 
              <MdDeleteForever/>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CartItem;
